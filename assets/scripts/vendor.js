import {
  onAttackHandler,
  gameLog,
  combatLog,
  pBonesLife,
  WOLF_MAN,
} from './app.js';
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
  let temp = WOLF_MAN;
  switch (true) {
    case temp === WOLF_MAN:
      return [1000, 45];
    case isNaN(temp):
      log(`invalid entering 67`);
      return [67, 67];
    case temp <= 34:
      return [35, 35];
    case temp > 100:
      return [99, 99];
    default:
      return [temp, temp];
  }
}

wolfmanLog.addEventListener('click', () => wolfman());

export const DAMAGE = (damageMod) => Math.round(Math.random() * damageMod);
// wolfMan(47)
//kimbo();
