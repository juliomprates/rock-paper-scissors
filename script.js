//the computer randomly choose between Rock, Paper and Scissors
function computerTurn() {
    let result;
    const choices = ["Rock", "Paper", "Scissors"];
    result = choices[(Math.floor(Math.random() * choices.length))];
    return result;
};


//determines the winner comparing both player and computer choices
// - true: the player wins
// - false: the computer wins
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

//return the result for a single round
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

let computerSelection = computerTurn().toLowerCase();
let playerSelection = prompt("Your turn: Rock, Paper or Scissors?").toLowerCase();

console.log(playRound(playerSelection, computerSelection));