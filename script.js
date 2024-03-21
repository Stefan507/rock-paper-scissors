let items = ["rock", "paper", "scissors"];

//Get the computers choice
function getComputerChoice() {
    return (items[(Math.floor(Math.random() * items.length))]);
}

// Declare score outside of function so the score doesn't reset after each round
var playerScore = 0;
var computerScore = 0;

// Play one round and return the result
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
// Update the score count
function updateScoreDisplay() {
    content.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}

// Get the result and be able to display
function updateResultDisplay(result) {
    const resultDiv = document.createElement("div");
    resultDiv.textContent = result;
    container.appendChild(resultDiv);
}

// Ensure that after one player hits 5, the game stops
function checkGameOver() {
    if (playerScore === 5 || computerScore === 5) {
        // Display the winner
        const winner = playerScore === 5 ? "Player" : "Computer";
        updateResultDisplay(`${winner} wins the game!`);
        // Disable the buttons
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
    }
}

document.getElementById("rock").addEventListener("click", function() {
    const result = PlayRound("rock", getComputerChoice());
    updateScoreDisplay();
    updateResultDisplay(result);
    checkGameOver();
});

document.getElementById("paper").addEventListener("click", function() {
    const result = PlayRound("paper", getComputerChoice());
    updateScoreDisplay();
    updateResultDisplay(result);
    checkGameOver();
});

document.getElementById("scissors").addEventListener("click", function() {
    const result = PlayRound("scissors", getComputerChoice());
    updateScoreDisplay();
    updateResultDisplay(result);
    checkGameOver();
});


const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");

container.appendChild(content);

updateScoreDisplay();