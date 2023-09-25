document.addEventListener('DOMContentLoaded', () => {
	const playerOneChoices = document.getElementById('playerOne').querySelectorAll('.choice');
	const playerTwoChoices = document.getElementById('playerTwo').querySelectorAll('.choice');

	playerOneChoices.forEach(choice => {
		 choice.addEventListener('click', () => playRound('playerOne', choice.classList[1]));
	});

	playerTwoChoices.forEach(choice => {
		 choice.addEventListener('click', () => playRound('playerTwo', choice.classList[1]));
	});
});

let playerOneSelection = '';
let playerTwoSelection = '';
let playerOneScore = 0;
let playerTwoScore = 0;
let round = 0;
const scoreboardPips = document.querySelectorAll('.scorePip');

function playRound(player, choice) {
	if (player === 'playerOne') {
		 playerOneSelection = choice;
	} else {
		 playerTwoSelection = choice;
	}

	if (playerOneSelection && playerTwoSelection) {
		 determineWinner();
		 playerOneSelection = '';
		 playerTwoSelection = '';

		 // update the scoreboard
		 updateScoreboard();

		 // reset if it's the end of a 3-round game
		 if (round === 3) {
			  resetGame();
		 }
	}
}

function determineWinner() {
	round++;
	if (playerOneSelection === playerTwoSelection) {
		 // it's a tie, no score change
	} else if (
		 (playerOneSelection === 'rock' && playerTwoSelection === 'scissors') ||
		 (playerOneSelection === 'scissors' && playerTwoSelection === 'paper') ||
		 (playerOneSelection === 'paper' && playerTwoSelection === 'rock')
	) {
		 playerOneScore++;
	} else {
		 playerTwoScore++;
	}
}

function updateScoreboard() {
	scoreboardPips[round - 1].textContent = playerOneScore > playerTwoScore ? '🟢' : '🔴';
}

function resetGame() {
	round = 0;
	playerOneScore = 0;
	playerTwoScore = 0;
	scoreboardPips.forEach(pip => pip.textContent = '⚪️');
}
