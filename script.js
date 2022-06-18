function computerPlay() {
    let random = Math.floor(Math.random() * 3);
    if (random == 0) {
        return "Rock";
    }
    else if (random == 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function getSelection(e){
    const decision = this.id;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == computerSelection){
        return "Tie! Both chose " + playerSelection;
    }
    else if (playerSelection == "rock" && computerSelection == "scissors"){
        return "You Win! Rock beats scissors";
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You Win! Paaper beats rock";
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You Win! Scissors beats paper";
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You Lose! Paper beats rock";
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You Lose! Scissors beats paper";
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You Lose! Rock beats scissors";
    }
}

function game() {
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
}


const buttons = document.querySelectorAll("button");
buttons.forEach( button => button.addEventListener("click", getSelection));
