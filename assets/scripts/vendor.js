import { onAttackHandler, gameLog, combatLog, pBonesLife } from './app.js';
import {  kimbo } from './test1.js';
import {  wolfMan } from './test2.js';
Object.prototype.log = param1 =>{
  console.log(param1)
  }
Object.prototype.dir = param1 =>{
  console.dir(param1)
  }
  
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
  let temp = +prompt(`Plese Enter a number`, 22);
  return temp === 'wolfMan'
    ? (temp = 'wolfMan')
    : isNaN(temp)
    ? (temp = 66)
    : temp <= 34
    ? (temp = 35)
    : temp > 100
    ? (temp = 99)
    : temp;
}

wolfmanLog.addEventListener('click', () => wolfman());

export let damage = (damageMog) => Math.round(Math.random() * damageMog);
//wolfMan()
kimbo()