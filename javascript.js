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

let humanScore = 0;
let computerScore = 0;

const scoresContainer = document.querySelector(".scores");
const computerScoreBoard = document.createElement("p");
const humanScoreBoard = document.createElement("p");
humanScoreBoard.textContent = `Your score: ${humanScore}`;
computerScoreBoard.textContent = `Computer score: ${computerScore}`
scoresContainer.appendChild(humanScoreBoard);
scoresContainer.appendChild(computerScoreBoard);

const gameProgressText = document.querySelector(".text-bottom");


function playRound(humanChoice) {
    let computerChoice = getComputerChoice();

    if(humanChoice == computerChoice) {
        gameProgressText.textContent = `You tied this round. You chose ${humanChoice}. The computer chose ${computerChoice}`;
        return;
    }
    else if(humanChoice == "scissors" && computerChoice == "paper" || humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "paper" && computerChoice == "rock") {
        gameProgressText.textContent = `You won this round. You chose ${humanChoice}. The computer chose ${computerChoice}`;
        humanScore += 1;
    }
    else {
        gameProgressText.textContent = `You lost this round. You chose ${humanChoice}. The Computer chose ${computerChoice}`;
        computerScore += 1;
    }
    humanScoreBoard.textContent = `Your score: ${humanScore}`;
    computerScoreBoard.textContent = `Computer score: ${computerScore}`;

    if(humanScore >= 5) {
        humanScore = 0;
        computerScore = 0;
        humanScoreBoard.textContent = `Your score: ${humanScore}`;
        humanScoreBoard.textContent = `Your score: ${humanScore}`;
        gameProgressText.textContent = "Game over. You beat the computer this round";

    }
    if(computerScore >= 5) {
        humanScore = 0;
        computerScore = 0;
        humanScoreBoard.textContent = `Your score: ${humanScore}`;
        humanScoreBoard.textContent = `Your score: ${humanScore}`;
        gameProgressText.textContent = "Game over. You lost to the computer this round";

    }
    return;
}



const buttons = document.querySelectorAll(".buttons");

buttons.forEach((button) => {
    button.addEventListener("click", function(e) {
        playRound(e.target.classList);
        console.log(humanScoreBoard.textContent);
        console.log(computerScoreBoard.textContent);
    });
});

