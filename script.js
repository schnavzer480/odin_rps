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



function getComputerChoice() {

    const choices = ["Rock", "Paper", "Scissors"];

    const randomIndex = Math.floor(Math.random() * choices.length);

    return choices[randomIndex];
}

console.log(getComputerChoice());