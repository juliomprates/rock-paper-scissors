const btns = document.querySelector(".buttons")
const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");
const resultText = document.querySelector("#result");
const replayPlace = document.querySelector(".play-again")
const playAgain = document.createElement("button");
playAgain.textContent = "Play Again";

//This function return a random array item to assign it's value on a variable
function computerTurn() {
    let result;
    const choices = ["Rock", "Paper", "Scissors"];
    result = choices[(Math.floor(Math.random() * choices.length))].toLowerCase();
    return result;
};

//This function compares 2 values and return a boolean to be used as condition
function getWinner(player, computer) {
    if (player === "rock" && computer === "scissors") {
        return true;
    }else if (player === "scissors" && computer === "paper") {
        return true;
    }else if (player === "paper" && computer === "rock") {
        return true;
    }else if (computer === "rock" && player === "scissors") {
        return false;
    }else if (computer === "scissors" && player === "paper") {
        return false;
    } else if (computer === "paper" && player === "rock") {
        return false;
    }
};

//This function compares 2 values and return a string to be used as output
function playRound(playerChoice, computerChoice) {
    let result;
    if (playerChoice == computerChoice) {
        result = "The round tied!";
    }else if (getWinner(playerChoice, computerChoice) === true) {
        result = "You won! " + playerChoice.toUpperCase() + " beats " + computerChoice.toUpperCase();
    }else if (getWinner(playerChoice, computerChoice) === false) {
        result = "You lost! " + computerChoice.toUpperCase() + " beats " + playerChoice.toUpperCase();
    }
    
    return result;
};

btns.addEventListener("click", e => {
        let result = (playRound(e.target.id, computerTurn()));
        resultText.textContent = result;
        if (result.includes("You won") && playerScore.textContent < 5 &&
        computerScore.textContent < 5) {                    
            let score = playerScore.textContent;
            score = parseInt(score) + 1
            playerScore.textContent = score
        } else if (result.includes("You lost") && playerScore.textContent < 5 &&
        computerScore.textContent < 5) {
            let score = computerScore.textContent;
            score = parseInt(score) + 1;
            computerScore.textContent = score
        };
        if (playerScore.textContent == "5") {
            resultText.textContent = "Player Wins!"
            replayPlace.append(playAgain);
            playAgain.addEventListener("click", () => {
                playerScore.textContent = "0",
                computerScore.textContent = "0"
                replayPlace.removeChild(playAgain)
        })
        } else if (computerScore.textContent == "5") {
            resultText.textContent = "Computer Wins!"
            replayPlace.append(playAgain);
            playAgain.addEventListener("click", () => {
                playerScore.textContent = "0",
                computerScore.textContent = "0"
                replayPlace.removeChild(playAgain)
            })
        }
});
