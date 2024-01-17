function getComputerChoice() {
    const comChoice = ["Piedra", "Papel", "Tijeras"];
    let randomChoice = Math.floor(Math.random() * 3);
    return comChoice[randomChoice];
}


function playRound(playSelection, compSelection) {

    const upperPlaySelect = playSelection.toUpperCase();
    const upperCompSelect = compSelection.toUpperCase();

    let win = `You Win , PS: ${upperPlaySelect} beats CS:${upperCompSelect}`;
    let Lose = `You Lose , CS: ${upperCompSelect}} beats PS: ${upperPlaySelect}`;
    if (upperCompSelect === upperPlaySelect) {
        console.log(`Es un empate, ${upperCompSelect} son lo mismo ${upperPlaySelect}`);
        return 0;
    } else if ((upperCompSelect === "PIEDRA" && upperPlaySelect === "TIJERAS") ||
        (upperCompSelect === "PAPEL" && upperPlaySelect === "PIEDRA") ||
        (upperCompSelect === "TIJERAS" && upperPlaySelect === "PAPEL")) {
            console.log(Lose);
            return 1;
    } else {
        console.log(win);
        return 2;
    }


}

function game() {
    let winPlayer = 0;
    let winCompu = 0;

    while(winCompu < 3 || winPlayer<3){
        const playerSelection = prompt("Ingresa tu elecion (Piedra papel o tijera) :");
        const computerSelection = getComputerChoice();
        

        
        const choice = playRound(playerSelection, computerSelection) ;

        if(choice === 1){
            winCompu+=1;
        }else if(choice === 2){
            winPlayer+=1;
        }
        if(winCompu>=3 || winPlayer>=3){
            if(winCompu>=3){
                console.log(`Perdiste.... ${winCompu} a ${winPlayer} contra la Compu`);
                break;
            }
            
            if(winPlayer>=3){
                console.log(`¡¡¡¡Ganaste!!!! ${winPlayer} a ${winCompu} contra la Compu`);
                break;
            }
            
        }
       
    }
}
game();