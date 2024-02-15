function getComputerChoice(){

    const randomNum = Math.floor(Math.random() * 3);
    switch (randomNum){
        case 0 : 
           return "Rock";
        case 1 :
            return "Paper";
        case 2 :
            return "Scissors";
        default:
            return "Invalid please refresh the page";
    }

}

//Testing the result of computer generation.
/*
let result = getComputerChoice();
console.log(result);
*/


function singleRound(playerSelection,ComputerSelection){

    const player = playerSelection.toLowerCase();
    if(
        (player === "rock" && ComputerSelection === "Scissors") ||
        (player === "scissors" && ComputerSelection === "Paper") ||
        (player === "paper" && ComputerSelection === "rock")
    ){
        return(`You Win! ${player} Beats ${ComputerSelection}`);
    }
    else if(
        (player === "rock" && ComputerSelection === "Paper") ||
        (player === "scissors" && ComputerSelection === "Rock") ||
        (player === "paper" && ComputerSelection === "Scissors")
    ){
        return(`You Lost! ${ComputerSelection} Beats ${player}`);
    }
    else if(
        (player === "rock" && ComputerSelection === "Rock") ||
        (player === "scissors" && ComputerSelection === "Scissors") ||
        (player === "paper" && ComputerSelection === "Paper")
    ){
        return("Its A Tie!");
    }
    else{
        return("Invalid input, please try entering : Rock, Paper or Scissors.");
    }

}

//Testing the result of player choice.
/*
playerSelection = "Rock";
ComputerSelection = getComputerChoice();
console.log(singleRound(playerSelection,ComputerSelection));  
*/


function playGame(){

    let playerScore = 0;
    let computerScore = 0;

    for (i = 1; i <= 5; i++) {
        
        const playerChoice = window.prompt (` Round ${i}: Enter Rock, Paper or Scissors:`);
        const computerChoice = getComputerChoice();

        

        if (singleRound(playerChoice,computerChoice).includes("Win")){
             playerScore++;
        }
        else if (singleRound(playerChoice,computerChoice).includes("Lost")){
                computerScore++;
        }
        
        console.log("\n",singleRound(playerChoice,computerChoice));
        console.log(`Your Current Score Is: ${playerScore}`);
        console.log(`Computer Current Score Is: ${computerScore}`);
        
        
    }

    console.log("\n\n\nGame Over!")
    console.log("Your Final Score is: ", playerScore);
    console.log("Computer Final Score is: ", computerScore);

    if (playerScore > computerScore){
        console.log("Congratulation! You Won the game!");
    }
    else if (computerScore > playerScore){
        console.log("You Lost! Better Luck Next Time.");
    }
    else{
        console.log("It's A Tie!");
    }
}

playGame();