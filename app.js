const takePickbtn = document.getElementById('take-pick-btn'); 
const startGamebtn = document.getElementById('start-game-btn');


const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';
let playerSelection;
let computerSelection;


function getPlayerChoice() {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
  if (
    selection !== ROCK &&
    selection !== PAPER &&
    selection !== SCISSORS
  ) {
    document.getElementById('user-choice').innerHTML = `Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`;
    return DEFAULT_USER_CHOICE;
  }
  document.getElementById('user-choice').innerHTML = `Your choice is ${selection}!!!`;
  return selection;

};

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
      return RESULT_PLAYER_WINS;
    } else {
      document.getElementById('game-result').innerHTML = 'You Lose!!!';
      return RESULT_COMPUTER_WINS
    }
};


takePickbtn.addEventListener('click', function() {
     playerSelection = getPlayerChoice();
     return playerSelection;
});

startGamebtn.addEventListener('click', function() {
    computerSelection = getComputerChoice();
    let winner = getWinner(computerSelection, playerSelection);
    return winner;
});







