console.log("Testing to see that the javascript file is working fine")

function getComputerChoice() {
    randomNumber = Math.random();
    if(randomNumber < .333) {
        return "scissors"
    }
    else if (randomNumber < .666) {
        return "rock";
    }
    else {
        return "paper";
    }
}

function getHumanChoice() {
    let choice = prompt("Welcome to rock, paper, scissors. Pick one of the following to play against the computer: 1) rock 2) paper 3) scissors", null);
    return choice;
}


let humanChoice = getHumanChoice();
console.log(humanChoice);