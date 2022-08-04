import { onAttackHandler, gameLog, KIM, combatLog } from './app.js';
export const playerHealthBar = document.getElementById('player-health');
export const monsterHealthBar = document.getElementById('monster-health');
export const NORMAL_ATTACK = 'normal';
export const STRONG_ATTACK = 'strong';
export const HEAL = 'heal';
const HIDE_LOG = 'HIDE LOG';
const SHOW_LOG = 'SHOW LOG';
const logBtn = document.getElementById('log-btn');

const attackBtn = document.getElementById('attack-btn');
export const strongAttackBtn = document.getElementById('strong-attack-btn');
export const healBtn = document.getElementById('heal-btn');

const wolfmanLog = document.getElementById('wolfman-Log');

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
  combatLog ? (logBtn.innerHTML = SHOW_LOG) : (logBtn.innerHTML = HIDE_LOG);
  gameLog();
});

export function promtUser() {
  let temp = +prompt(`Plese Enter 65?`, 65);
  if (isNaN(temp) || temp <= 44 || temp > 100) {
    console.dir(`invalid  entring 65`);
    temp = 65;
  }
  return temp;
}

wolfmanLog.addEventListener('click', () => wolfman());

function wolfman() {
  KIM.age = 313;
  console.dir(KIM.age);
}
export let damage = (damageMog, Target) => Math.round(Math.random() * damageMog);
