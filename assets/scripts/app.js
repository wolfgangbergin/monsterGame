import { startGame } from './vendor.js';
let startingHealth = startGame();

const playerHealthBar = document.getElementById('player-health');
const monsterHealthBar = document.getElementById('monster-health');
const bonusLifeEl = document.getElementById('bonus-life');

let combatLog = true;

let pBonesLife = 1;
bonusLifeEl.innerHTML = pBonesLife;

let monsterStrongAttact = true;
let monsterHeal = true;

let mHealth = startingHealth;
let pHealth = startingHealth;

let roundNumber = 0;

export let gameLog = () => {
  combatLog = !combatLog;
};

export function round(modifier) {
  let playerMessage = ``;
  let monsterMessage = ``;
  roundNumber += 1;

  let damage = (param1) => Math.round(Math.random() * param1);

  let attack = (modifier) => {
    if (modifier === 'heal' && pBonesLife > 0) {
      pBonesLife = 0;
      bonusLifeEl.innerHTML = pBonesLife;
      pHealth = startingHealth;
      playerMessage = `Player Heals to ${startingHealth}`;
    } else {
      mHealth -= damage(modifier);
      playerMessage = `Player dose ${damage(modifier)}`;
    }
    if (mHealth < 10 && monsterHeal) {
      mHealth = startingHealth;
      monsterHeal = false;
      monsterMessage = `Monster Heals to ${startingHealth}`;
    } else if (mHealth < 30 && monsterStrongAttact) {
      pHealth -= damage(20);
      monsterStrongAttact = false;
      monsterMessage = `Monster dose ${damage(modifier)}`;
    } else {
      pHealth -= damage(10);
      monsterMessage = `Monster dose ${damage(10)}`;
    }
    if (combatLog) {
      console.log(`${playerMessage} and ${monsterMessage}!`);
    }
    monsterHealthBar.max = startingHealth;
    playerHealthBar.max = startingHealth;
    monsterHealthBar.value = mHealth;
    playerHealthBar.value = pHealth;
  };

  if (mHealth === 0 && pHealth === 0) {
    console.log('Its a tie game');
    return;
  } else if (mHealth < 1) {
    console.log('Player Wins');
    return;
  } else if (pHealth < 1) {
    console.log('Monster Wins!');
    return;
  } else {
    attack.call(this, modifier);
  }
}
