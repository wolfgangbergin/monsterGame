import {
  onAttackHandler,
  gameLog,
  combatLog,
  pBonesLife,
  WOLF_MAN,
} from './app.js';
const log = console.log;
import { kimbo } from './kimbo.js';
import { wolfMan } from './wolfMan.js';
import { steve } from './steve.js';
import { simpleGenerator } from './simpleGenerator.js';
import { wolfObj } from './kimbo.js';
import { middleEarth } from './steve.js';
import { testWolf } from './testWolf.js';
import { jobob } from './sets.js';

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
  let temp =55;
  try {
    
    if (isNaN(temp)) {
      throw { message: `invalid entering 67` };
    }
  } catch (error) {
    console.log(error.message);
  } finally {
    switch (true) {
      case temp <= 34:
        return [35, 35];
      case temp > 100:
        return [99, 99];
      case temp === WOLF_MAN:
        return [1000, 45];
      case temp < 100 && temp >= 34:
        return [temp, temp];
      default:
        return [67, 67];
    }
  }
}

wolfmanLog.addEventListener('click', () => testWolf());
//testWolf()
 const wolf =  true&& 'wolf'

jobob(wolf, typeof NaN,  1,4,3, false, )

export const DAMAGE = (damageMod) => Math.round(Math.random() * damageMod);

//wolfMan(47)
//kimbo();
//steve();

// const wolfArray = [
//   'a',
//   'b',
//   'c',
//   'd',
//   'e',
//   'f',
//   'g',
//   'h',
//   'i',
//   'j',
//   'k',
//   'default',
//   'end',
// ];
// const wolfGen = simpleGenerator(wolfObj);

// function testBob() {
//   let fla = 11;
//   do {
//     var { value, done } = wolfGen.next(1);
//     fla--;
//     if (fla === 7 || fla === 6) {
//       continue;
//     }
//     console.dir(value);
//   } while (!done);
//   console.log(wolfGen.return('banana').value);
// }

//testBob();
