//This function return a random array item to assign it's value on a variable
function computerTurn() {
    let result;
    const choices = ["Rock", "Paper", "Scissors"];
    result = choices[(Math.floor(Math.random() * choices.length))];
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

/*
This function loops playRound() to be executed 5 times;
uses getWinner() as condition to increment playerScore or computerScore variables by 1;
outputs playerScore and computerScore variables on the console before every loop ends;
compares playerScore and computerScore values to output a string on the console
*/
function game() {
    let playerScore = 0;
    let computerScore = 0;
    
    let i = 0;
    while (i < 5) {
        let computerSelection = computerTurn().toLowerCase(); 
        let playerSelection = prompt("Your turn: Rock, Paper or Scissors?").toLowerCase(); 
        console.log(playRound(playerSelection, computerSelection));

        if (getWinner(playerSelection, computerSelection) === true) {
            playerScore++  
        } else if (getWinner(playerSelection, computerSelection) === false) {
            computerScore++ 
        };
        console.log("Your score: " + playerScore + " " + "Computer score: " + computerScore);

        i++;
    };
   
    if (playerScore == computerScore) {
        console.log("Tie Game!");
    } else if (playerScore > computerScore) {
        console.log("You won the game! Congrats!");
    } else if (computerScore > playerScore) {
        console.log("The Computer won the game!")
    };
};

game();

