const arrOne = ["👊🏽", "🖐🏽", "✌🏽"];
const arrTwo = ["✌🏽", "👊🏽", "🖐🏽"];

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
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
async function displayComputerChoice(choice){
  const computerChoiceBox = document.querySelector(".computer-choice-icon");
  for (let i = 0; i < 3; i++) {
    computerChoiceBox.textContent = arrOne[i];
    await sleep(250);
  }

  computerChoiceBox.textContent = choice;

  console.log('this will fire after all delays');
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

  // Play animation for overall winner
}

let playerChoice = null;
let computerChoice = null;
let currentRound = 0;

const playerChoiceIcon = document.querySelectorAll(".player-choice-icon");
playerChoiceIcon.forEach((currentElement) => {
  currentElement.addEventListener("click", (e) => {
    playerChoice = e.target.innerText;
    computerChoice = getComputerChoice();
    roundWinner = playOneRound(computerChoice, playerChoice);

    playComputerChoiceAnim(computerChoice);
    updateUI(roundWinner, currentRound);
    if (roundWinner !== "tie") currentRound++;
  });
});
