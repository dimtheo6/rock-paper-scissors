let computerScore = 0;
let playerScore = 0;

function getComputerChoice(computerChoice) {
    let choice = [`rock`, `paper`, `scissors`];

    computerChoice = choice[Math.floor(Math.random() * choice.length)];
    return computerChoice;

}

function getPlayerChoice(playerChoice) {

    playerChoice = prompt(`Rock, paper or scissors?`).toLowerCase();

    while (playerChoice !== `rock` && playerChoice !== `paper` && playerChoice !== `scissors`) {
        playerChoice = prompt(`Please choose "Rock, paper or scissors"`).toLowerCase();
    }
    return playerChoice;
}
function scoreSystem() {


    if (computerChoice === playerChoice) {
        console.log('its a tie');
    } else
        if (computerChoice === `rock` && playerChoice === `paper`) {
            console.log(`You Win! Paper beats Rock.`);
            playerScore = playerScore + 1;
        } else
            if (computerChoice === `rock` && playerChoice === `scissors`) {
                console.log(`You Lose! Rock beats Scissors.`);
                computerScore = computerScore + 1;
            } else
                if (computerChoice === `paper` && playerChoice === `rock`) {
                    console.log(`You Lose! Paper beats Rock.`);
                    computerScore = computerScore + 1;
                } else
                    if (computerChoice === `paper` && playerChoice === `scissors`) {
                        console.log(`You Win! Scissors beats Paper.`);
                        playerScore = playerScore + 1;
                    } else
                        if (computerChoice === `scissors` && playerChoice === `rock`) {
                            console.log(`You Win! Rock beats Scissors.`);
                            playerScore = playerScore + 1;
                        } else
                            if (computerChoice === `scissors` && playerChoice === `paper`) {
                                console.log(`You Lose! Scissors beats Paper.`);
                                computerScore = computerScore + 1;
                            }
    console.log(`computer score is : `, computerScore);
    console.log(`player score is : `, playerScore);
}

function winner(){
    if (computerScore > playerScore){
        console.log(`GRIIIITAAAAWWW THE COMPUTER WON WITH A SCORE OF ${computerScore}`);
    }else if(computerScore < playerScore){
        console.log(`GRIIIITAAAAWWW THE PLAYER WON WITH A SCORE OF ${playerScore}`);
    }else{
        console.log(`GRIIIITAAAAWWW THE GAME IS A TIE`);
    }
}

function gameStart() {
    scoreSystem();
}

for (i = 1; i <= 5; i++) {
    console.log(`~~~~ROUND ${i}~~~~`);

    var computerChoice = getComputerChoice();
    var playerChoice = getPlayerChoice();
    gameStart();
}

winner();

