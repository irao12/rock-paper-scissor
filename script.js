let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach( button => button.addEventListener("click", getSelection));

function computerPlay() {
    let random = Math.floor(Math.random() * 3);
    if (random == 0) {
        return "rock";
    }
    else if (random == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getSelection(e){
    const playerSelection = this.id;
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
}

function updateScore(){
    const playerScoreDiv = document.querySelector("#playerScore");
    let text = playerScoreDiv.textContent;
    text = text.substring(0, text.length-1) + playerScore;
    playerScoreDiv.textContent = text;

    const computerScoreDiv = document.querySelector("#computerScore");
    text = computerScoreDiv.textContent;
    text = text.substring(0, text.length-1) + computerScore;
    computerScoreDiv.textContent = text;
}

function resetGame(){
    playerScore = 0;
    computerScore = 0;

    buttons.forEach( button => {
        button.addEventListener("click", getSelection);
        button.classList.add("inplay");
    });

    document.querySelector("#reset").remove();

    let h3 = document.querySelector("h3");
    h3.innerText = "First to 5 wins";
    h3.classList.remove("end");

    document.querySelector("#result").innerText = "";

    updateScore();
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let resultText = "";
    let playerWon = false;
    let computerWon = false;
    let gameOver = false;

    if (playerSelection == computerSelection){
        resultText = "Tie! Both chose " + playerSelection;
    }
    else if (playerSelection == "rock" && computerSelection == "scissors"){
        resultText = "You Win! Rock beats scissors";
        playerWon = true;
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        resultText = "You Win! Paper beats rock";
        playerWon = true;
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        resultText = "You Win! Scissors beats paper";
        playerWon = true;
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        resultText = "You Lose! Paper beats rock";
        computerWon = true;
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        resultText = "You Lose! Scissors beats paper";
        computerWon = true;
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        resultText = "You Lose! Rock beats scissors";
        computerWon = true;
    }

    resultDiv = document.querySelector("div#result");
    resultDiv.textContent = resultText;


    if (playerWon) {
        playerScore++;
    }
    else if (computerWon) {
        computerScore++;
    }
    updateScore();

    if (playerScore >= 5){
        const header = document.querySelector("h3");
        header.textContent = "You win!";
        header.classList.add("end");
        gameOver = true;
    }
    else if (computerScore >= 5){
        const header = document.querySelector("h3");
        header.textContent = "Computer wins!";
        header.classList.add("end");
        gameOver = true;
    }

    if (gameOver){
        buttons.forEach(button => {
            button.removeEventListener("click", getSelection);
            button.classList.remove("inplay");
        });
        const reset = document.createElement("button");
        reset.id = "reset";
        reset.innerText = "RESET";
        document.querySelector("body").appendChild(reset);
        reset.addEventListener('click', resetGame);
    }
}
