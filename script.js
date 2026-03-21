
function getComputerChoice(){

    let randomNumber = Math.random();

    if (randomNumber < 0.33) {
        return("rock");
    }
    else if (randomNumber < 0.66) {
        return("paper");
    }
    else{
        return("scissors");
    }
}

function getHumanChoice(){
    let choice = prompt("Enter: rock, paper or scissors");
    return(choice);
}



const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playGame(){

    let humanScore=0;
    let computerScore=0;
    
    function playRound(humanSelection, computerSelection) {
        humanSelection = humanSelection.toLowerCase();

        if (humanSelection === computerSelection) {
            console.log("Draw!");
        } else if (
            (humanSelection === "rock" && computerSelection === "scissors") ||
            (humanSelection === "paper" && computerSelection === "rock") ||
            (humanSelection === "scissors" && computerSelection === "paper")
        ) {
            humanScore++;
            console.log("You win!");
        } else {
            computerScore++;
            console.log("You lose!");
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

       if (humanScore > computerScore) {
        console.log("GAME OVER: You won the match! Score: " + humanScore + ":" + computerScore);
    } else if (humanScore < computerScore) {
        console.log("GAME OVER: You lost the match! Score: " + humanScore + ":" + computerScore);
    } else {
        console.log("GAME OVER: It's a tie match! Score: " + humanScore + ":" + computerScore);
    }

}

playGame();

playRound(humanSelection, computerSelection);

console.log("Score: " + humanScore + " - " + computerScore);

