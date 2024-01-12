const arrOne = ['👊🏽','🖐🏽','✌🏽'];
const arrTwo = ['✌🏽','👊🏽','🖐🏽'];

function getComputerChoice(){
    return arrOne[Math.floor(Math.random()*3)];
}

function playOneRound(computerChoice, playerChoice){
    let roundWinner = null;
    while(!roundWinner){
        console.log(`Player choose: ${playerChoice} | Computer choose ${computerChoice}`);
        if(arrOne.indexOf(computerChoice) === arrTwo.indexOf(playerChoice)){
            roundWinner = 'computer';
            break;
        }
        else if(arrOne.indexOf(playerChoice) === arrTwo.indexOf(computerChoice)){       roundWinner = 'player';
        break;
        }

        computerChoice = getComputerChoice();
        playerChoice = prompt('Enter rock paper or scissors').toLowerCase();
    }

    return roundWinner;
}


function game(){
    let winner = null;
    let playerWinCount = 0;
    let computerWinCount = 0;

    while(!winner){
        let roundWinner = playOneRound(getComputerChoice(),prompt('Enter rock paper or scissors').toLowerCase());
        console.log("Round winner is: " + roundWinner); 
        roundWinner == 'player' ? playerWinCount++ : computerWinCount++;
        if(playerWinCount === 3) winner = 'player';
        if(computerWinCount === 3) winner = 'computer';
    }

    return `Winner is ${winner}`;
}