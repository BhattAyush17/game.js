// Choices array
const choices = ["rock", "paper", "scissors"];

// DOM Elements
const userScoreEl = document.getElementById("user-score");
const compScoreEl = document.getElementById("comp-score");
const messageEl = document.getElementById("msg");

// Initial scores
let userScore = 0;
let compScore = 0;

// Function to get computer's random choice
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a draw!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        userScore++;
        userScoreEl.textContent = userScore; // Update the user score in the DOM
        return "You win!";
    } else {
        compScore++;
        compScoreEl.textContent = compScore; // Update the computer score in the DOM
        return "Computer wins!";
    }
}

// Function to play the game
function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    const resultMessage = determineWinner(userChoice, computerChoice);

    // Display result message
    messageEl.textContent = `You choose ${userChoice}, Computer choose ${computerChoice}. ${resultMessage}`;
}

// Add event listeners to each choice
document.getElementById("rock").addEventListener("click", function() {
    playGame("rock");
});
document.getElementById("paper").addEventListener("click", function() {
    playGame("paper");
});
document.getElementById("scissors").addEventListener("click", function() {
    playGame("scissors");
});
