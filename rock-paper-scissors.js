const container = document.querySelector("#container");
const choices = ["rock", "paper", "scissors"]

//variables to hold player's and pc's choice
let playerChoice;
let pcChoice;

initializeTitleScreen(container);

function initializeTitleScreen(container) {
    //create content for title screen
    let title = document.createElement("h1");
    title.classList.add("title");
    let titleButton = document.createElement("button");
    titleButton.classList.add("button");
    titleButton.setAttribute("type", "button");

    container.appendChild(title);
    container.appendChild(titleButton);

    container.classList.add("title-container");
    title.textContent = "Rock Paper Scissors";
    titleButton.textContent = "Play";

    titleButton.addEventListener("click", () => {
        initializePlayArea(container, title, titleButton);
    });
}

function initializePlayArea(container, title, titleButton) {
    //remove title elements
    container.removeChild(title);
    container.removeChild(titleButton);
    container.classList.remove("title-container");

    //add the new elements
    let playerArea = document.createElement("div");
    playerArea.classList.add("player-area");

    for (let i = 0; i < 3; i++) {
        let newButton = document.createElement("button");
        newButton.classList.add("button");
        newButton.setAttribute("type", "button");
        newButton.setAttribute("id", choices[i]);
        newButton.textContent = choices[i];

        playerArea.appendChild(newButton);
    }

    container.appendChild(playerArea);

    let scoreContainer = document.createElement("div");
    scoreContainer.classList.add("score-container");

    let roundCounter = document.createElement("h1");
    roundCounter.setAttribute("id", "round");
    scoreContainer.appendChild(roundCounter);

    let score = document.createElement("h1");
    score.textContent = "Score";
    scoreContainer.appendChild(score);

    let scoreCounter = document.createElement("h1");
    scoreCounter.setAttribute("id", "score");
    scoreContainer.appendChild(scoreCounter);

    container.appendChild(scoreContainer);

    let pcArea = document.createElement("div");
    pcArea.classList.add("pc-area");
    pcArea.textContent = "";

    container.appendChild(pcArea);

    container.classList.add("game-container");

    Play();
}

function Play() {
    let round = 1;
    let playerScore = 0;
    let pcScore = 0;

    updateBoard(round, playerScore, pcScore);

    while (round <= 5) {
        humanPlay();
        computerChoice = computerPlay();
        let result = whoWins(playerChoice, pcChoice);
        if (result === "victory") playerScore++;
        else if (result === "loss") playerScore++;
        round++;
        updateBoard(round, playerScore, pcScore);
    }
}

function updateBoard(round, playerScore, pcScore) {
    document.querySelector("#round").textContent = `Round: ${round}`;
    document.querySelector("#score").textContent = `${playerScore} - ${pcScore}`;

}

function humanPlay() {
    let buttons = document.querySelectorAll(".button");
    buttons.forEach(button => button.addEventListener("click", returnId));
}

function returnId(e) {
    player = e.target.id;
}

function computerPlay() {
    let randomNumber = Math.floor(Math.random() * Math.floor(3));
    return choices[randomNumber];

}

function whoWins(player, computer) {

    if (player === computer) {
        alert(`You both chose ${player}. It's a tie`);
        return "tie";
    }
    else if (player === "rock" && computer === "scissors" ||
        player === "paper" && computer === "rock" ||
        player === "scissors" && computer === "paper") {
        alert(`You won! ${player} beats ${computer}`);
        return "victory";
    }
    else {
        alert(`You lost! ${computer} beats ${player}`);
        return "loss";
    }
}