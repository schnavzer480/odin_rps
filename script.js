/*let getComputerChoice = Math.floor(Math.random() * 3) + 1;
console.log(getComputerChoice);


/*function getComputerChoice() {
    return Math.floor(Math.random() * 3) +1;
}


/*if (getComputerChoice() == 1) {
    console.log("Rock");
} if (getComputerChoice() == 2) {
    console.log("Paper")
}   if (getComputerChoice() == 3) {
    console.log("Scissors")
}


/*let choice = getComputerChoice();

if (choice == 1) {
    console.log("Rock");
}
else if (choice == 2) {
    console.log("Paper");
}
else if (choice == 3) {
    console.log("Scissors");
}*/





//STEP 2
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

//STEP 3
function getHumanChoice(greeting) {
    let humanChoice = prompt("Let's play!", greeting);
    return humanChoice.toLowerCase();
}


//STEP 6
function playGame() {
    //STEP 4
let humanScore = 0;
let computerScore = 0;



//STEP 5
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();


    if (humanChoice === computerChoice) {
        console.log("It's a Thai!");
    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You won!");
        humanScore++;
    }
    else {
        console.log("You lost!");
        computerScore++;
    }
    console.log(`Scores - You: ${humanScore}, Computer: ${computerScore}`);
}


//5 ROUNDS
for (let i = 0; i < 5; i++) {
    console.log(`Round ${i + 1}`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}

if (humanScore > computerScore) {
    console.log("Congratulations! You won the game!");
} else if (humanScore < computerScore) {
    console.log("You lost, bitch!");
} else {
    console.log("The game is a Thai!");
}
}

playGame();