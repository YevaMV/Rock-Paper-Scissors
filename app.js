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
        document.getElementById('user-choice').innerHTML = 'Your choice is ROCK!!!';
      } else if (playerSelection === PAPER){
        document.getElementById('user-choice').innerHTML = 'Your choice is Paper!!!';
      } else
      document.getElementById('user-choice').innerHTML = 'Your choice is SCISSORS!!!';
    
  })
});

function getComputerChoice() {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        document.getElementById('computer-choice').innerHTML = `Player's choice is ${ROCK}!!!`;
        return ROCK;
      
    } else if (randomValue < 0.67) {
        document.getElementById('computer-choice').innerHTML = `Player's choice is ${PAPER}!!!`;
        return PAPER;
     
    } else {
        document.getElementById('computer-choice').innerHTML = `Player's choice is ${SCISSORS}!!!`;
        return SCISSORS;
       
    }
};

 function getWinner(cChoice, pChoice) {
    if (cChoice === pChoice) {
      document.getElementById('game-result').innerHTML = 'Draw!!!';
      return RESULT_DRAW;
    } else if (
      (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ) {
      document.getElementById('game-result').innerHTML = 'You Win!!!';
      playerScore = playerScore + 1;
      playerScoreResult.innerHTML = playerScore;
      return RESULT_PLAYER_WINS;
    } else {
      document.getElementById('game-result').innerHTML = 'You Lose!!!';
      computerScore = computerScore + 1;
      computerScoreResult.innerHTML = computerScore;
      return RESULT_COMPUTER_WINS
    }; 
};



startGamebtn.addEventListener('click', function() {
    computerSelection = getComputerChoice();
    let winner = getWinner(computerSelection, playerSelection);
    return winner;
});







