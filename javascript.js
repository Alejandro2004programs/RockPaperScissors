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

