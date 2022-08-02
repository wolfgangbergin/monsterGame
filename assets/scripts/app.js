import { startGame, playerHealthBar, monsterHealthBar } from './vendor.js';
// let startingHealth = startGame();
const bonusLifeEl = document.getElementById('bonus-life');
let startingHealth = 50;
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

export function onAttackHandler(attackMode) {
  let playerMessage = ``;
  let monsterMessage = ``;
  roundNumber += 1;

  let damage = (param1) => Math.round(Math.random() * param1);

  let combatRound = (attackMode) => {
    if (attackMode === 'heal' && pBonesLife > 0 && pHealth >= 1) {
      pBonesLife = 0;
      bonusLifeEl.innerHTML = pBonesLife;
      pHealth = startingHealth;
      playerMessage = `Player Heals to ${startingHealth}`;
    } else if (attackMode === `strong` && pHealth >= 1) {
      let temp = damage(30);
      mHealth -= temp;
      playerMessage = `Player strong attack dose ${temp}!`;
    } else if (attackMode === `normal` && pHealth >= 1) {
      let temp = damage(10);
      mHealth -= temp;
      playerMessage = `Player attack dose ${temp}`;
    }
    if (mHealth < 20 && monsterHeal && mHealth >= 1) {
      mHealth = startingHealth;
      monsterHeal = false;
      monsterMessage = `Monster Heals to ${startingHealth}`;
    } else if (pHealth < 15 && monsterStrongAttact && mHealth >= 1) {
      let temp = damage(30);
      pHealth -= temp;
      monsterStrongAttact = false;
      monsterMessage = `Monster strong attack dose ${temp}!`;
    } else if (mHealth >= 1) {
      let temp = damage(10);
      monsterMessage = `Monster attack dose ${temp}`;
      pHealth -= temp;
    }
    if (combatLog) {
      console.log(`${playerMessage} and ${monsterMessage}!`);
    }
    monsterHealthBar.max = startingHealth;
    playerHealthBar.max = startingHealth;
    monsterHealthBar.value = mHealth;
    playerHealthBar.value = pHealth;
  };

  if (mHealth <= 0 && pHealth > 0) {
    console.log('You Wins!!! :)');
    return;
  } else if (pHealth <= 0 && mHealth > 0) {
    console.log('Monster Wins!');
    return;
  } else if (pHealth <= 0 && mHealth <= 0) {
    console.log('We have a draw!');
    return;
  } else {
    combatRound.call(this, attackMode);
  }
}
