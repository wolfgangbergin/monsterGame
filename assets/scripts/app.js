import { startGame, playerHealthBar, monsterHealthBar } from './vendor.js';
// let startingHealth = startGame();
const bonusLifeEl = document.getElementById('bonus-life');
let startingHealth = 55;
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

export function onAttackHandler(modifier) {
  let playerMessage = ``;
  let monsterMessage = ``;
  roundNumber += 1;

  let damage = (param1) => Math.round(Math.random() * param1);

  let combatRound = (modifier) => {
    if (modifier === 'heal' && pBonesLife > 0) {
      pBonesLife = 0;
      bonusLifeEl.innerHTML = pBonesLife;
      pHealth = startingHealth;
      playerMessage = `Player Heals to ${startingHealth}`;
    } else if (modifier === `strong`) {
      let temp = damage(30);
      mHealth -= temp;
      playerMessage = `Player strong attack dose ${temp}!`;
    } else if (modifier === `attack`) {
      let temp = damage(10);
      mHealth -= temp;
      playerMessage = `Player attack dose ${temp}`;
    }
    if (mHealth < 10 && monsterHeal) {
      mHealth = startingHealth;
      monsterHeal = false;
      monsterMessage = `Monster Heals to ${startingHealth}`;
    } else if (mHealth < 30 && monsterStrongAttact) {
      let temp = damage(30);
      pHealth -= temp;
      monsterStrongAttact = false;
      monsterMessage = `Monster strong attack dose ${temp}!`;
    } else {
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

  if (mHealth <= 0) {
    console.log('You Wins!!! :)');
    return;
  } else if (pHealth <= 0) {
    console.log('Monster Wins!');
    return;
  } else {
    combatRound.call(this, modifier);
  }
}
