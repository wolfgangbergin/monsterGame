import {
  promtUser,
  playerHealthBar,
  monsterHealthBar,
  healBtn,
  strongAttackBtn,
  NORMAL_ATTACK,
  STRONG_ATTACK,
  HEAL,
  damage,
} from './vendor.js';
let cheatCode;

let startingHealth;
let mHealth;
let pHealth;
let pBonesLife = 1;
function kim888() {
  startingHealth = promtUser();
  if (startingHealth === 'wolfMan') {
    cheatCode = 1000;
    startingHealth = 45;
    mHealth = startingHealth;
    pHealth = startingHealth + cheatCode;
  } else if (!isNaN(startingHealth)) {
    cheatCode = 0;
    mHealth = startingHealth;
    pHealth = startingHealth + cheatCode;
  }
}
kim888();

//let startingHealth = 45;

const bonusLifeEl = document.getElementById('bonus-life');

export let combatLog = false;

bonusLifeEl.innerHTML = pBonesLife;
let monsterStrongAttact = true;
let monsterHeal = true;

export let gameLog = () => (combatLog = !combatLog);

export function onAttackHandler(attackMode) {
  let playerMessage = ``;
  let monsterMessage = ``;
  let combatRound = (attackMode) => {
    if (attackMode === HEAL && pBonesLife > 0 && pHealth >= 1) {
      pBonesLife = 0;
      bonusLifeEl.innerHTML = pBonesLife;
      pHealth = startingHealth + cheatCode;
      playerMessage = `Player Heals to ${startingHealth + cheatCode}`;
    } else if (attackMode === STRONG_ATTACK && pHealth >= 1) {
      let temp = damage(30);
      mHealth -= temp;
      playerMessage = `Player strong attack dose ${temp}!`;
    } else if (attackMode === NORMAL_ATTACK && pHealth >= 1) {
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
    } else {
      let temp = damage(10);
      monsterMessage = `Monster attack dose ${temp}`;
      pHealth -= temp;
    }

    if (combatLog) {
      console.dir(`${playerMessage} and ${monsterMessage}!`);
    }
    monsterHealthBar.max = startingHealth;
    playerHealthBar.max = startingHealth;
    monsterHealthBar.value = mHealth;
    playerHealthBar.value = pHealth;
  };

  if (mHealth <= 0 && pHealth > 0) {
    console.log(`You Wins with ${playerHealthBar.value} Health left!!! :)`);
    startGame();
  } else if (pHealth <= 0 && mHealth > 0) {
    console.log(`Monster Wins with ${monsterHealthBar.value} Health left!`);
    startGame();
  } else if (pHealth <= 0 && mHealth <= 0) {
    console.log('We have a draw! starting new game.');
    startGame();
  } else {
    combatRound.call(this, attackMode);
  }
}
function startGame() {
  kim888();

  pBonesLife = 1;
  bonusLifeEl.innerHTML = pBonesLife;
  monsterStrongAttact = true;
  monsterHeal = true;
  strongAttackBtn.disabled = false;
  healBtn.disabled = false;
  mHealth = startingHealth;
  pHealth = startingHealth + cheatCode;
  playerHealthBar.value = mHealth;
  monsterHealthBar.value = pHealth;
}
