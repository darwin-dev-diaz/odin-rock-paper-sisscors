const arrOne = ["👊🏽", "🖐🏽", "✌🏽"];
const arrTwo = ["✌🏽", "👊🏽", "🖐🏽"];

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getComputerChoice() {
  return arrOne[Math.floor(Math.random() * 3)];
}

function playOneRound(computerChoice, playerChoice) {
  let roundWinner = null;
  console.log(
    `Player choose: ${playerChoice} | Computer choose ${computerChoice}`
  );
  if (arrOne.indexOf(computerChoice) === arrTwo.indexOf(playerChoice)) {
    roundWinner = "computer";
  } else if (arrOne.indexOf(playerChoice) === arrTwo.indexOf(computerChoice)) {
    roundWinner = "player";
  } else {
    roundWinner = "tie";
  }

  return roundWinner;
}
function displayComputerChoice(choice) {
  const computerChoiceBox = document.querySelector(".computer-choice-icon");
  computerChoiceBox.innerText = choice;
}

function updateUI(roundWinner, currentRound) {
  const roundIcons = document.querySelectorAll(".round-icon");

  // updates UI based on the results of playOneRound
  switch (roundWinner) {
    case "player":
      roundIcons[currentRound].classList.add("player-won");
      roundIcons[currentRound].classList.remove("current-round");
      roundIcons[currentRound + 1].classList.add("current-round");
      break;
    case "computer":
      roundIcons[currentRound].classList.add("computer-won");
      roundIcons[currentRound].classList.remove("current-round");
      roundIcons[currentRound + 1].classList.add("current-round");
      break;
  }
}

function winnerAnimation(winner) {
  const roundIcons = document.querySelectorAll(".round-icon");
  const roundBoxText = document.querySelector(".game-status h2");
  const gameScreen = document.querySelector(".game-screen");

  gameScreen.removeChild(document.querySelector(".player-choice"));
  gameScreen.removeChild(document.querySelector(".computer-choice"));

  let winnerClass = winner === "player" ? "player-won" : "computer-won";

  roundBoxText.innerText = `Winner: ${winner}`;
  roundIcons.forEach((roundIcon) => {
    roundIcon.classList.add(winnerClass);
    roundIcon.classList.remove("current-round");
  });
}

let playerChoice = null;
let computerChoice = null;
let currentRound = 0;

let playerWinCount = 0;
let computerWinCount = 0;
let roundWinner;
const playerChoiceIcon = document.querySelectorAll(".player-choice-icon");
playerChoiceIcon.forEach((currentElement) => {
  currentElement.addEventListener("click", (e) => {
    playerChoice = e.target.innerText;
    computerChoice = getComputerChoice();
    roundWinner = playOneRound(computerChoice, playerChoice);

    if(roundWinner === 'player') playerWinCount += 1;
    else if(roundWinner === 'computer') computerWinCount += 1;
    
    displayComputerChoice(computerChoice);
    updateUI(roundWinner, currentRound);

    if (roundWinner !== "tie") {
      currentRound++;
    }

    if (playerWinCount === 3) winnerAnimation('player');
    if (computerWinCount === 3) winnerAnimation('computer');
  });
});
