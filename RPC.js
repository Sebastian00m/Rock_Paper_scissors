function getComputerChoice(){
    const comChoice = ["Piedra","Papel","Tijeras"];
    let randomChoice =Math.floor(Math.random()*3);
    return comChoice[randomChoice];
}
const playerSelection = "Rock";
const computerSelection = getComputerChoice();

function playRound (playerSelection, computerSelection) {
    let win = `You Win , ${playerSelection} beats ${computerSelection}`;
    let Lose = `You Lose , ${computerSelection} beats ${playerSelection}`;
    return(computerSelection == "Rock" && playerSelection != "Papel") ? win : Lose;
}
console.log(playRound())
//console.log(getComputerChoice());