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

function getHumanChoice() {
	let playerChoice = prompt("What will you play?");
	if (
		playerChoice.toLowerCase() == "rock" ||
		playerChoice.toLowerCase() == "paper" ||
		playerChoice.toLowerCase() == "scissors"
	) {
		return playerChoice.toLowerCase();
	} else return console.error("insert a valid option");
}

function playGame() {
	let humanScore = 0,
		cpuScore = 0;

	function showScores() {
		if (humanScore > cpuScore) console.log(humanScore + " to " + cpuScore);
		else if (humanScore < cpuScore) console.log(humanScore + " to " + cpuScore);
		else console.log(humanScore + " to " + cpuScore);
	}

	function humanWin(humanPlay, cpuPlay) {
		humanScore = humanScore + 1;
		console.log("You Win! " + humanPlay + " beats " + cpuPlay);
	}

	function cpuWin(humanPlay, cpuPlay) {
		cpuScore = cpuScore + 1;
		console.log("You Lose, " + cpuPlay + " beats " + humanPlay);
	}

	function playRound() {
		humanPlay = getHumanChoice();
		cpuPlay = getComputerChoice();
		if (humanPlay == "rock" && cpuPlay == "rock")
			console.log("Tie, both played rock");
		else if (humanPlay == "rock" && cpuPlay == "paper")
			cpuWin(humanPlay, cpuPlay);
		else if (humanPlay == "rock" && cpuPlay == "scissors")
			humanWin(humanPlay, cpuPlay);
		else if (humanPlay == "paper" && cpuPlay == "rock")
			humanWin(humanPlay, cpuPlay);
		else if (humanPlay == "paper" && cpuPlay == "paper")
			console.log("Tie, both played paper");
		else if (humanPlay == "paper" && cpuPlay == "scissors")
			cpuWin(humanPlay, cpuPlay);
		else if (humanPlay == "scissors" && cpuPlay == "rock")
			cpuWin(humanPlay, cpuPlay);
		else if (humanPlay == "scissors" && cpuPlay == "paper")
			humanWin(humanPlay, cpuPlay);
		else if (humanPlay == "scissors" && cpuPlay == "scissors")
			console.log("Tie, both played scissors");
		else console.error("an error occured during round");
		showScores();
	}

	function endGame() {
		console.log("Final Score: " + humanScore + " to " + cpuScore);
	}
	for (let i = 0; i < 5; i++) {
		console.log("Round " + (i + 1));
		playRound();
	}
	endGame();
}

playGame();
