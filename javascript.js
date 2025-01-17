function getComputerChoice() {
    randomNumber = Math.random();
    if(randomNumber < .333) {
        return "scissors";
    }
    else if (randomNumber < .666) {
        return "rock";
    }
    else {
        return "paper";
    }
}

function getHumanChoice() {
    let choice = prompt(`Welcome to a new game. Pick between rock, paper, scissors. The current score is: You: ${humanScore}, Computer: ${computerScore}`, null);
    choice = choice.toLowerCase();
    return choice;
}

function playRound() {
    let computerChoice = getComputerChoice();
    let humanChoice = (getHumanChoice()).toLowerCase();

    // I could probably write this cleaner using a nested switch statement. I will look into that later.
    if(humanChoice == computerChoice) {
        console.log(`You tied. The computer choice was ${computerChoice}. Your choice was ${humanChoice}`);
    }
    else if(humanChoice == "scissors" && computerChoice == "paper" || humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "paper" && computerChoice == "rock") {
        console.log(`You won. The computer choice was ${computerChoice}. Your choice was ${humanChoice}`);
        humanScore += 1;
    }
    else {
        console.log(`You lost. The computer choice was ${computerChoice}. Your choice was ${humanChoice}`);
        computerScore += 1;
    }

    return;
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
    let i = 0;
    while (i < 5) {
        playRound();
        console.log(`Your score is ${humanScore}. The computer score is ${computerScore}`);
        i += 1;
    }
    return;
}

playGame();

