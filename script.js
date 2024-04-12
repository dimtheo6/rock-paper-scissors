let computerScore = 0;
let playerScore = 0;
let rounds = 0;

function game(){

function playGame(){
    const btnRock = document.querySelector('#rock');
    const btnPaper = document.querySelector('#paper');
    const btnScissors = document.querySelector('#scissors');
  
    const computerOptions = [`rock`, `paper`, `scissors`];
    const btnClose = document.querySelector('#close');

    let playerChoice;
    let computerChoice;

    let i=1;

    let select = document.getElementById('playerSelection');
    let select2 = document.getElementById('computerSelection');
    let imgPlayer = document.createElement('img');
    let imgComputer = document.createElement('img');

    btnClose.addEventListener('click',()=>{
        closePopup();
        resetGame();
    })
    
    btnRock.addEventListener('click',()=>{
        
        console.log(`~~~~ROUND ${i}~~~~`);
        playerChoice = 'rock';
        computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
        computerIcon();

        imgPlayer.src = 'images/rock2.png';
        select.appendChild(imgPlayer);

        console.log(computerChoice);
        winner(playerChoice,computerChoice);
        i++
       
       
    })
    
    btnPaper.addEventListener('click',()=>{
        console.log(`~~~~ROUND ${i}~~~~`);
        playerChoice = 'paper';
        computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
        computerIcon();

        imgPlayer.src = 'images/paper2.jpeg';
        select.appendChild(imgPlayer);

        console.log(computerChoice);
        winner(playerChoice,computerChoice);
        i++
    })
    
    btnScissors.addEventListener('click',()=>{
        console.log(`~~~~ROUND ${i}~~~~`);
        playerChoice = 'scissors';
        computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
        computerIcon();

        imgPlayer.src = 'images/scissors2.png';
        select.appendChild(imgPlayer);

        console.log(computerChoice);
        winner(playerChoice,computerChoice);
        i++
    })
    function computerIcon(){
        if (computerChoice==='rock'){
            imgComputer.src='images/rock2.png'
            select2.appendChild(imgComputer);
        }else if(computerChoice==='paper'){
            imgComputer.src='images/paper2.jpeg'
            select2.appendChild(imgComputer);
        }else if(computerChoice==='scissors'){
            imgComputer.src='images/scissors2.png'
            select2.appendChild(imgComputer);
        }
    }
    
} 



const winner = (playerChoice,computerChoice)=>{

    let scoreInfo = document.querySelector('#scoreInfo');
    let scoreInfo2 = document.querySelector('#scoreInfo2')
    let winner = document.querySelector('h2');
      

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

                            if (playerScore === 5){
                                
                                winner.textContent = 'The player won!';
                                openPopup();
                            }else if(computerScore === 5){
                                winner.textContent = 'The computer won!';
                                openPopup();
                            }
                    scoreInfo.textContent=(`player score is: ${playerScore}`);
                    scoreInfo2.textContent=(`computer score is: ${computerScore}`);
}
function openPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
  }
  
  function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
  }
  function resetGame(){
     computerScore = 0;
     playerScore = 0;
     rounds = 0;
  }

playGame();
}

game();