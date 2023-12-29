const winnersChoice = ['rock','paper','scissors'];
const losersChoice = ['scissors','rock','paper'];
// function to get computer choice
function getComputerChoice(){
    return winnersChoice[Math.floor(Math.random() * 3)];
}
// function to play just one round of rock paper scissor. takes the computers choice and players choice. replays round if there is a tie
function playOneRound(computerChoice, playerChoice){
    //case computer wins
    console.log(computerChoice);
    if(winnersChoice.indexOf(computerChoice) === losersChoice.indexOf(playerChoice)){
        return 'computer';
    } else if(winnersChoice.indexOf(playerChoice) === losersChoice.indexOf(computerChoice)){
        return 'player';
    }
    // if there is no winner, or the player enters an improper value, redo the round.
    return(playOneRound(getComputerChoice(), prompt("Enter rock paper or scissors").toLowerCase()));
}