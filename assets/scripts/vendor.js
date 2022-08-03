import { onAttackHandler, gameLog, } from './app.js';
export const playerHealthBar = document.getElementById('player-health');
export const monsterHealthBar = document.getElementById('monster-health');

const logBtn = document.getElementById('log-btn');

const attackBtn = document.getElementById('attack-btn');
export const strongAttackBtn = document.getElementById('strong-attack-btn');
export const healBtn = document.getElementById('heal-btn');

const consoleLog = document.getElementById('console-Log');

attackBtn.addEventListener('click', function () {
  onAttackHandler.call(this, `normal`);
});
strongAttackBtn.addEventListener('click', () => {
  strongAttackBtn.disabled = true;
  onAttackHandler.call(this, `strong`);
});
healBtn.addEventListener('click', () => {
  healBtn.disabled = true;
  onAttackHandler.call(this, 'heal');
});

logBtn.addEventListener('click', () => {
  if (logBtn.innerHTML === 'SHOW LOG') {
    logBtn.innerHTML = 'HIDE LOG';
  } else if ((logBtn.innerHTML = 'HIDE LOG')) {
    logBtn.innerHTML = 'SHOW LOG';
  }

  gameLog();
});

export function promtUser() {
  let temp = +prompt(`Plese Enter 45?`, 45)
  return temp !== 45 ? promtUser() : temp;
}

