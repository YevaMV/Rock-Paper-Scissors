const takePickbtn = document.getElementById('take-pick-btn'); 
const startGamebtn = document.getElementById('start-game-btn');

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
//   return selection;
};

const computerChoice = function() {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        document.getElementById('computer-choice').innerHTML = `Player's choice is ${ROCK}!!!`;
        // return ROCK;
    } else if (randomValue < 0.67) {
        document.getElementById('computer-choice').innerHTML = `Player's choice is ${PAPER}!!!`;
        // return PAPER;
    } else {
        document.getElementById('computer-choice').innerHTML = `Player's choice is ${SCISSORS}!!!`;
        // return SCISSORS;
    }
}

takePickbtn.addEventListener('click', function() {
  const playerSelection = getPlayerChoice();
});

startGamebtn.addEventListener('click', function() {
    const computerSelection = computerChoice();
})