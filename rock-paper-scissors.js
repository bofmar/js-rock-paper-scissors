





// //Create a constant array of strings called choices that holds the values of rock, paper and scissors in global
// const choices = ["rock", "paper", "scissors"]
// //Declare a keepGoing variable that holds a boolean value.Initialize as true
// let keepGoing = true;

// play();

// function play() {
//     while (keepGoing) {

//         //Prompt the user for input and store it in a variable called playerChoice
//         let playerChoice = playerSelection();

//         //Have the computer choose and store the choice in a variable called computerChoice
//         let computerChoice = computerPlay();

//         //Compare values and Announce a winner
//         console.log(whoWins(playerChoice, computerChoice));

//         //Ask if the user wants to play again. Change keepGoing to false if not.
//         if (!keepPlaying()) {
//             alert("Thanks for playing!")
//             keepGoing = false;
//         }
//     }
// }

// function computerPlay() {
//     //Choose a random number between 0 and 2.
//     let randomNumber = Math.floor(Math.random() * Math.floor(3));

//     //Look into choices[] at the position of the random number. Return the content of the array at that position
//     return choices[randomNumber];

// }

// function playerSelection() {

//     //declare a variable isValid of type boolean and set it to false
//     let isValid = false;
//     let playerInput;

//     while (!isValid) {
//         //Ask the user for input. Store that input in a variable called playerInput
//         playerInput = prompt("Please choose between rock, paper or scissors");

//         //Validate the input
//         if (validateInput(playerInput)) {
//             //If the input is valid , change isValid to true
//             isValid = true;
//         }
//         else {
//             // If the input is invalid tell the user and prompt them again
//             alert(`${playerInput} is not a valid choice`);
//         }
//     }
//     // return the playerInput
//     return playerInput;
// }


// //The validateInput function
// function validateInput(input) {

//     //Take the user's input from playerSelection() and store it in a variable called inputToCompare.Convert inputToCompare to all caps
//     let inputToCompare = input.toUpperCase();

//     //Loop through the choices[] array and compare inputToCompare to each all caps value in the array until a match is found
//     for (let i = 0; i <= 2; i++) {
//         //If a match is found return true
//         if (inputToCompare === choices[i].toUpperCase()) {
//             return true;
//         }
//     }
//     return false;
// }

// function whoWins(player, computer) {
//     //Take the user's and computer's inputs and compare them.
//     //Return You won message if player won
//     //Return You lost message if player lost
//     //Return tie message if it's a tie

//     if (player.toUpperCase() === computer.toUpperCase()) {
//         return `You both chose ${player}. It's a tie`;
//     }
//     else if (player.toUpperCase() === "ROCK" && computer.toUpperCase() === "SCISSORS" ||
//         player.toUpperCase() === "PAPER" && computer.toUpperCase() === "ROCK" ||
//         player.toUpperCase() === "SCISSORS" && computer.toUpperCase() === "PAPER") {
//         return `You won! ${player} beats ${computer}`;
//     }
//     else {
//         return `You lost! ${computer} beats ${player}`;
//     }
// }

// function keepPlaying() {
//     //Ask user to input y || yes (case insensitive) if he wants to continue or n || no if he doesn't
//     let continueGame = prompt("Would you like to go another round? y, yes for yes, n,no for no");
//     //If y || yes play another round
//     if (continueGame.toUpperCase() === "Y" || continueGame.toUpperCase() === "YES") {
//         return true;
//     }
//     //If n || no change keepGoing to false
//     else if (continueGame.toUpperCase() === "N" || continueGame.toUpperCase() === "NO") {
//         return false;
//     }
//     else {
//         alert(`${continueGame} is not a valid input.`);
//         keepPlaying();
//     }
// }