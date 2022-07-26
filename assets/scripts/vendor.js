import { round } from './app.js';

const bonusLifeEl = document.getElementById('bonus-life');

const attackBtn = document.getElementById('attack-btn');
const strongAttackBtn = document.getElementById('strong-attack-btn');
const healBtn = document.getElementById('heal-btn');
const logBtn = document.getElementById('log-btn');
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
  round.call(this, '+');
});
