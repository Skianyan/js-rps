let humanScore = 0,
	computerScore = 0,
	currRound = 1;

function resetScores() {
	(humanScore = 0), (computerScore = 0);
	currRound = 1;
	gameState.textContent = "Choose a move!";
	updateScore();
}

function getComputerChoice() {
	let rndNum = Math.random();
	if (rndNum <= 0.33) {
		return "rock";
	} else if (rndNum > 0.33 && rndNum <= 0.66) {
		return "paper";
	} else if (rndNum > 0.66) {
		return "scissors";
	}
}

// function getHumanChoice() {
// 	let playerChoice = prompt("What will you play?");
// 	if (
// 		playerChoice.toLowerCase() == "rock" ||
// 		playerChoice.toLowerCase() == "paper" ||
// 		playerChoice.toLowerCase() == "scissors"
// 	) {
// 		return playerChoice.toLowerCase();
// 	} else return console.error("insert a valid option");
// }

// function showScores() {
// 	if (humanScore > computerScore)
// 		console.log(humanScore + " to " + computerScore);
// 	else if (humanScore < computerScore)
// 		console.log(humanScore + " to " + computerScore);
// 	else console.log(humanScore + " to " + computerScore);
// }

function humanWin(humanPlay, cpuPlay) {
	humanScore = humanScore + 1;
	gameState.textContent = "You Win! " + humanPlay + " beats " + cpuPlay;
	updateScore();
	currRound = currRound + 1;
}

function cpuWin(humanPlay, cpuPlay) {
	computerScore = computerScore + 1;
	gameState.textContent = "You Lose, " + cpuPlay + " beats " + humanPlay;
	updateScore();
	currRound = currRound + 1;
}
function roundTie(humanPlay) {
	updateScore();
	currRound = currRound + 1;
	gameState.textContent = "Tied, both players played " + humanPlay;
}

function endGame() {
	if (humanScore > computerScore) {
		gameState.textContent =
			"You Win! Final Score: " + humanScore + " to " + computerScore;
	} else if (computerScore > humanScore) {
		gameState.textContent =
			"You Lose.. Final Score: " + humanScore + " to " + computerScore;
	} else
		gameState.textContent =
			"Tie. Final Score: " + humanScore + " to " + computerScore;
}

function updateScore() {
	playerScore.textContent = humanScore.toString();
	cpuScore.textContent = computerScore.toString();
	gameRound.textContent = "Round " + currRound;
}

function playRound(humanPlay) {
	cpuPlay = getComputerChoice();
	if (currRound > 5) return;
	else if (humanPlay == "Rock" && cpuPlay == "rock") roundTie(humanPlay);
	else if (humanPlay == "Rock" && cpuPlay == "paper")
		cpuWin(humanPlay, cpuPlay);
	else if (humanPlay == "Rock" && cpuPlay == "scissors")
		humanWin(humanPlay, cpuPlay);
	else if (humanPlay == "Paper" && cpuPlay == "rock")
		humanWin(humanPlay, cpuPlay);
	else if (humanPlay == "Paper" && cpuPlay == "paper") roundTie(humanPlay);
	else if (humanPlay == "Paper" && cpuPlay == "scissors")
		cpuWin(humanPlay, cpuPlay);
	else if (humanPlay == "Scissors" && cpuPlay == "rock")
		cpuWin(humanPlay, cpuPlay);
	else if (humanPlay == "Scissors" && cpuPlay == "paper")
		humanWin(humanPlay, cpuPlay);
	else if (humanPlay == "Scissors" && cpuPlay == "scissors")
		roundTie(humanPlay);
	else console.error("an error occured during round");
	if (currRound == 6) endGame();
}

// for (let i = 0; i < 5; i++) {
// 	console.log("Round " + (i + 1));
// 	playRound();
// }

document
	.getElementsByTagName("body")[0]
	.setAttribute(
		"style",
		"display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100vh; gap: 10px"
	);

const gameRound = document.createElement("div");
gameRound.textContent = "Round " + currRound;
gameRound.setAttribute(
	"style",
	"display: flex; flex-direction: column; gap: 15px; border: solid gray; padding: 10px"
);

const gameScores = document.createElement("div");
gameScores.setAttribute(
	"style",
	"display: flex; flex-direction: row; gap: 10px; border: solid gray; padding: 10px"
);

playerScoreBox = document.createElement("div");
playerScoreBox.setAttribute(
	"style",
	"display: flex; flex-direction: column; border: solid gray; padding: 0px 15px; text-align: center"
);
gameScores.appendChild(playerScoreBox);

playerScoreBox.textContent = "Player:";
playerScore = document.createElement("p");
playerScore.textContent = "nil";
playerScoreBox.appendChild(playerScore);

cpuScoreBox = document.createElement("div");
cpuScoreBox.setAttribute(
	"style",
	"display: flex; flex-direction: column; border: solid gray; padding: 0px 15px; text-align: center"
);
gameScores.appendChild(cpuScoreBox);

cpuScoreBox.textContent = "Cpu:";
cpuScore = document.createElement("p");
cpuScore.textContent = "nil";
cpuScoreBox.appendChild(cpuScore);

const gameBox = document.createElement("div");
gameBox.setAttribute(
	"style",
	"display: flex; flex-direction: column; gap: 15px; border: solid gray; padding: 20px"
);

const playerPlay = document.createElement("div");
playerPlay.setAttribute(
	"style",
	"display: flex; justify-content: center; gap: 10px"
);

const buttGen = (buttName, buttId) => {
	const button = document.createElement("button");
	button.id = buttId;
	button.textContent = buttName;
	button.addEventListener("click", function () {
		playRound(buttName);
	});
	playerPlay.appendChild(button);
};

buttGen("Rock", "playRock");
buttGen("Paper", "playPaper");
buttGen("Scissors", "playScissors");

gameBox.appendChild(playerPlay);

const gameState = document.createElement("div");
gameState.textContent = "Choose a move!";
gameState.setAttribute(
	"style",
	"display: flex; flex-direction: column; gap: 15px; border: solid gray; padding: 10px"
);

const reset = document.createElement("button");

reset.textContent = "Reset";
reset.addEventListener("click", function () {
	resetScores();
});

document.body.appendChild(gameRound);
document.body.appendChild(gameScores);
document.body.appendChild(gameBox);
document.body.appendChild(gameState);
document.body.appendChild(reset);
//playGame();
