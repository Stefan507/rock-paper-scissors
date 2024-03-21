let items = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return (items[(Math.floor(Math.random() * items.length))]);
}

// Declare score outside of function so the score doesn't reset after each round
var playerScore = 0
var computerScore = 0

function PlayRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock') {
        if (computerSelection == 'rock') {
            return ("This match is a tie")
        } else if (computerSelection == 'paper') {
            computerScore ++;
            return ("Computer wins, paper beats rock")
        } else if (computerSelection == 'scissors') {
            playerScore ++;
            return ("Player wins, rock beats scissors")
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'paper') {
            return ("This match is a tie")
        } else if (computerSelection == 'rock') {
            playerScore ++;
            return ("Player wins, paper beats rock")
        } else if (computerSelection == 'scissors') {
            computerScore ++;
            return ("Computer wins, scissors beats paper")
        }
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'scissors') {
            return ("This match is a tie")
        } else if (computerSelection == 'paper') {
            playerScore ++;
            return ("Player wins, scissors beats paper")
        } else if (computerSelection == 'rock') {
            computerScore ++;
            return ("Computer wins, rock beats scissors")
        }
    }
}

function updateScoreDisplay() {
    content.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}

document.getElementById("rock").addEventListener("click", function() {
    const result = PlayRound("rock", getComputerChoice());
    updateScoreDisplay();
    console.log(result);
});

document.getElementById("paper").addEventListener("click", function() {
    const result = PlayRound("paper", getComputerChoice());
    updateScoreDisplay();
    console.log(result);
});

document.getElementById("scissors").addEventListener("click", function() {
    const result = PlayRound("scissors", getComputerChoice());
    updateScoreDisplay();
    console.log(result);
});


const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");

container.appendChild(content);

updateScoreDisplay();