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

//loops the single round function 5 times and creates a score for the player and computer
function game() {
    let playerScore = 0;
    let computerScore = 0;
    
    let i = 0;
    while (i < 5) {
        let computerSelection = computerTurn().toLowerCase(); //gets the random array item as a selection
        let playerSelection = prompt("Your turn: Rock, Paper or Scissors?").toLowerCase(); //gets player input as his selection
        console.log(playRound(playerSelection, computerSelection));

        //checks the result to update the score
        if (getWinner(playerSelection, computerSelection) === true) {
            playerScore = playerScore + 1;
        } else if (getWinner(playerSelection, computerSelection) === false) {
            computerScore = computerScore + 1;
        };
        console.log("Your score: " + playerScore + " " + "Computer score: " + computerScore);

        i++;
    };
    //reports who won the game
    if (playerScore == computerScore) {
        console.log("Tie Game");
    } else if (playerScore > computerScore) {
        console.log("You won the game! Congrats!");
    } else if (computerScore > playerScore) {
        console.log("Computer won the game!")
    };
};

game();

