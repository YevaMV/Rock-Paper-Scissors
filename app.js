const takePickbtn = document.getElementById('take-pick-btn'); 
const startGamebtn = document.getElementById('start-game-btn');
const playerChoices = document.querySelectorAll('.img-link');
const playerScoreResult = document.getElementById('player-score');
const computerScoreResult = document.getElementById('computer-score');
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';



playerChoices.forEach(function(choice){
  choice.addEventListener('click', function(e){
    playerSelection = (e.target.id).toUpperCase();
    if (playerSelection === ROCK){
       document.getElementById('user-choice').innerHTML = 'Your choice is ROCK <i class="far fa-hand-rock"></i>';
    } else if (playerSelection === PAPER){
       document.getElementById('user-choice').innerHTML = 'Your choice is PAPER <i class="far fa-hand-paper"></i>';
    } else {
      document.getElementById('user-choice').innerHTML = 'Your choice is SCISSORS <i class="far fa-hand-scissors"></i>';
    };
    getComputerChoice();
    computerSelection = getComputerChoice();
    let winner = getWinner(computerSelection, playerSelection);
    return winner;
  }); 
  
});

function getComputerChoice() {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        document.getElementById('computer-choice').innerHTML = `Player's choice is ${ROCK} <i class="far fa-hand-rock"></i>`;
        return ROCK;
    } else if (randomValue < 0.67) {
        document.getElementById('computer-choice').innerHTML = `Player's choice is ${PAPER} <i class="far fa-hand-paper"></i>`;
        return PAPER;
    } else {
        document.getElementById('computer-choice').innerHTML = `Player's choice is ${SCISSORS} <i class="far fa-hand-scissors"></i>`;
        return SCISSORS;  
    }
};



 function getWinner(cChoice, pChoice) {
    if (cChoice === pChoice) {
      document.getElementById('game-result').innerHTML = 'Draw!!! <span> Go On...</span>';
      return RESULT_DRAW;
    } else if (
      (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ) {
      document.getElementById('game-result').innerHTML = 'You Win!!! <span>Go On...</span>';
      playerScore = playerScore + 1;
      playerScoreResult.innerHTML = playerScore;
        if(playerScore === 5 && computerScore < 5) {
          document.getElementById('win-window').style.display = 'block';
          document.getElementById('win-player-score').innerHTML = playerScore;
          document.getElementById('win-computer-score').innerHTML = computerScore;
          document.getElementById('winner').innerHTML = 'Congrats, You WON!!!';
          document.querySelector('.restart-btn').addEventListener('click', function(){
            document.getElementById('win-window').style.display = 'hidden';
            window.location.reload();
            return false;
          });
        } 
      } else {
        document.getElementById('game-result').innerHTML = 'You Lose!!!<Span>Go On...</Span>';
        computerScore = computerScore + 1;
        computerScoreResult.innerHTML = computerScore;
        if(computerScore === 5 && playerScore < 5) {
          document.getElementById('win-window').style.display = 'block';
          document.getElementById('winner').innerHTML = 'Game Ended, You Lose!!!';
          document.getElementById('win-player-score').innerHTML = playerScore;
          document.getElementById('win-computer-score').innerHTML = computerScore;
          document.getElementById('winner').innerHTML = 'Game Over, You Lose!!!';
          document.querySelector('.restart-btn').addEventListener('click', function(){
            document.getElementById('win-window').style.display = 'hidden';
            window.location.reload();
            return false;
          });
        };
      }; 
  };







