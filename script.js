let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(humanChoice) {
    if (humanScore >= 5 || computerScore >= 5) return;

    const computerChoice = getComputerChoice();
    const roundMsg = document.querySelector("#round-msg");
    const scoreDisplay = document.querySelector("#score-display");
    const finalResult = document.querySelector("#final-result");

    if (humanChoice === computerChoice) {
        roundMsg.textContent = "It is a tie! Both chose " + humanChoice;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        roundMsg.textContent = "You win the round! " + humanChoice + " beats " + computerChoice;
    } else {
        computerScore++;
        roundMsg.textContent = "You lose the round! " + computerChoice + " beats " + humanChoice;
    }

    scoreDisplay.textContent = "Score: " + humanScore + " - " + computerScore;

    if (humanScore === 5) {
        finalResult.textContent = "GAME OVER: You are the winner! 🏆";
        finalResult.style.color = "green";
    } else if (computerScore === 5) {
        finalResult.textContent = "GAME OVER: Computer won the match! 🤖";
        finalResult.style.color = "red";
    }
}

document.querySelector("#rock").addEventListener("click", function() { playRound("rock"); });
document.querySelector("#paper").addEventListener("click", function() { playRound("paper"); });
document.querySelector("#scissors").addEventListener("click", function() { playRound("scissors"); });

