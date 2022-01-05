const startGameBtn = document.getElementById('start-game-btn'); 

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;

const getPlayerChoice = function() {
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

startGameBtn.addEventListener('click', function() {
  const playerSelection = getPlayerChoice();
});