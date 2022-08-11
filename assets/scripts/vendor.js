import { onAttackHandler, gameLog, combatLog, pBonesLife, WOLF_MAN } from './app.js';
import { kimbo } from './kimbo.js';
import { wolfMan } from './wolfMan.js';
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
  onAttackHandler.call(this, `strong`);
  strongAttackBtn.disabled = !0;
});
healBtn.addEventListener('click', () => {
  onAttackHandler.call(this, 'heal');
  healBtn.disabled = !pBonesLife;
});

logBtn.addEventListener('click', () => {
  combatLog ? (logBtn.innerHTML = SHOW_LOG) : (logBtn.innerHTML = HIDE_LOG);
  gameLog();
});

export function promtUser() {
  let temp = 'thrthrththr';
  switch (true) {
    case temp === WOLF_MAN:
      return WOLF_MAN;
    case isNaN(temp):
      log(`invalid entering 67`);
      return 67;
    case temp <= 34:
      return 35;
    case temp > 100:
      return 99;
    default:
      return temp;
  }
}

wolfmanLog.addEventListener('click', () => wolfman());

export let damage = (damageMog) => Math.round(Math.random() * damageMog);
// wolfMan(47)
 //kimbo();
