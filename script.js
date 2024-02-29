function getComputerChoice(computerChoice) {
    let choice = [`rock`, `paper`, `scissors`];

    computerChoice = choice[Math.floor(Math.random() * choice.length)];
    console.log(computerChoice);
}

function getPlayerChoice(playerChoice) {

    playerChoice = prompt(`Rock, paper or scissors?`).toLowerCase();

    while (playerChoice !== `rock` && playerChoice !== `paper` && playerChoice !== `scissors`) {
        playerChoice = prompt(`Please choose "Rock, paper or scissors"`).toLowerCase();
    }
    console.log(playerChoice);
}

getPlayerChoice();

