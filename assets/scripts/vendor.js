import { round, gameLog } from './app.js';
const logBtn = document.getElementById('log-btn');

const attackBtn = document.getElementById('attack-btn');
const strongAttackBtn = document.getElementById('strong-attack-btn');
const healBtn = document.getElementById('heal-btn');

const consoleLog = document.getElementById('console-Log');

attackBtn.addEventListener('click', function () {
  round.call(this, 10);
});
strongAttackBtn.addEventListener('click', () => {
  strongAttackBtn.disabled = true;
  round.call(this, 20);
});
healBtn.addEventListener('click', () => {
  healBtn.disabled = true;
  round.call(this, 'heal');
});

logBtn.addEventListener('click', () => {
  if (logBtn.innerHTML === 'SHOW LOG') {
    logBtn.innerHTML = 'HIDE LOG';
  } else if ((logBtn.innerHTML = 'HIDE LOG')) {
    logBtn.innerHTML = 'SHOW LOG';
  }

  gameLog();
});

export function startGame() {
  let temp = parseInt(prompt(`Plese Enter 55!`, 55));
  if (temp !== 55) {
    return startGame();
  }
  return temp;
}
