function getComputerChoice(computerChoice) {
    let choice = [`rock`, `paper`, `scissors`];

    computerChoice = choice[Math.floor(Math.random() * choice.length)];
    console.log(computerChoice);
    return computerChoice;

}

function getPlayerChoice(playerChoice) {

    playerChoice = prompt(`Rock, paper or scissors?`).toLowerCase();

    while (playerChoice !== `rock` && playerChoice !== `paper` && playerChoice !== `scissors`) {
        playerChoice = prompt(`Please choose "Rock, paper or scissors"`).toLowerCase();
    }
    return playerChoice;
}

function playRound(){

    computerChoice = getComputerChoice();
    playerChoice = getPlayerChoice();

    if (computerChoice === `rock` && playerChoice === `rock`){
        console.log('its a tie');
    }else 
    if(computerChoice === `rock` && playerChoice === `paper`){
        console.log(`You Win! Paper beats Rock.`);
    }else
    if(computerChoice === `rock` && playerChoice === `scissors`){
        console.log(`You Lose! Rock beats Scissors.`);
    }else
    if(computerChoice === `paper` && playerChoice === `paper`){
        console.log(`Its a tie.`);
    }else
    if(computerChoice === `paper` && playerChoice === `rock`){
        console.log(`You Lose! Paper beats Rock.`);
    }else
    if(computerChoice === `paper` && playerChoice === `scissors`){
        console.log(`You Win! Scissors beats Paper.`);
    }else
    if(computerChoice === `scissors` && playerChoice === `scissors`){
        console.log(`Its a tie.`);
    }else
    if(computerChoice === `scissors` && playerChoice === `rock`){
        console.log(`You Win! Rock beats Scissors.`);
    }else
    if(computerChoice === `scissors` && playerChoice === `paper`){
        console.log(`You Lose! Scissors beats Paper.`);
    }
}

playRound();



