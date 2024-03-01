let computerScore = 0;
let playerScore = 0;

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
function scoreSystem(){    


    if (computerChoice === playerChoice){
        console.log('its a tie');
    }else 
    if(computerChoice === `rock` && playerChoice === `paper`){
        console.log(`You Win! Paper beats Rock.`);
        playerScore = +1;
    }else
    if(computerChoice === `rock` && playerChoice === `scissors`){
        console.log(`You Lose! Rock beats Scissors.`);
        computerScore =+1;
    }else
    if(computerChoice === `paper` && playerChoice === `rock`){
        console.log(`You Lose! Paper beats Rock.`);
        computerScore =+1;
    }else
    if(computerChoice === `paper` && playerChoice === `scissors`){
        console.log(`You Win! Scissors beats Paper.`);
        playerScore =+1;
    }else
    if(computerChoice === `scissors` && playerChoice === `rock`){
        console.log(`You Win! Rock beats Scissors.`);
        playerScore =+1;
    }else
    if(computerChoice === `scissors` && playerChoice === `paper`){
        console.log(`You Lose! Scissors beats Paper.`);
        computerScore =+1;
    }
    console.log(`computer score is : `,computerScore);
    console.log(`player score is : `,playerScore);
    return [computerScore,playerScore];
    
}





function gameStart(){

    scoreSystem();
}

for (i=1; i<=5; i++ ){

    var computerChoice = getComputerChoice();
    var playerChoice = getPlayerChoice();
gameStart();
}
/* function playGame(){
    

    if (computerChoice === `rock` && playerChoice === `rock`){
        console.log('its a tie');
    }else 
    if(computerChoice === `rock` && playerChoice === `paper`){
        console.log(`You Win! Paper beats Rock.`);
        playerScore +=1;
    }else
    if(computerChoice === `rock` && playerChoice === `scissors`){
        console.log(`You Lose! Rock beats Scissors.`);
        computerScore +=1;
    }else
    if(computerChoice === `paper` && playerChoice === `paper`){
        console.log(`Its a tie.`);
    }else
    if(computerChoice === `paper` && playerChoice === `rock`){
        console.log(`You Lose! Paper beats Rock.`);
        computerScore +=1;
    }else
    if(computerChoice === `paper` && playerChoice === `scissors`){
        console.log(`You Win! Scissors beats Paper.`);
        playerScore +=1;
    }else
    if(computerChoice === `scissors` && playerChoice === `scissors`){
        console.log(`Its a tie.`);
    }else
    if(computerChoice === `scissors` && playerChoice === `rock`){
        console.log(`You Win! Rock beats Scissors.`);
        playerScore +=1;
    }else
    if(computerChoice === `scissors` && playerChoice === `paper`){
        console.log(`You Lose! Scissors beats Paper.`);
        computerScore +=1;
    }
    
} */

/* playGame(); */



