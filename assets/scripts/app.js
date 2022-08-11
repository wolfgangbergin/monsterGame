import {
  promtUser,
  playerHealthBar,
  monsterHealthBar,
  healBtn,
  strongAttackBtn,
  NORMAL_ATTACK,
  STRONG_ATTACK,
  HEAL,
  DAMAGE,
  
} from './vendor.js';
export const WOLF_MAN = 'wolfMan'

let [pStartingHealth, mStartingHealth] = promtUser();

let pHealth = pStartingHealth;
let mHealth = mStartingHealth;
export let pBonesLife = 1;

const bonusLifeEl = document.getElementById('bonus-life');

export let combatLog = true;

bonusLifeEl.innerHTML = pBonesLife;
let monsterStrongAttact = true;
let monsterHeal = true;

export let gameLog = () => (combatLog = !combatLog);

export function onAttackHandler(attackMode) {
  let playerMessage = ``;
  let monsterMessage = ``;
  let combatRound = (attackMode) => {
    if (attackMode === HEAL && pBonesLife > 0 && pHealth >= 1) {
      pBonesLife -= 1;
      bonusLifeEl.innerHTML = pBonesLife;
      pHealth =  pStartingHealth;
      playerMessage = `Player Heals to ${ pStartingHealth}`;
    } else if (attackMode === STRONG_ATTACK && pHealth >= 1) {
      let temp = DAMAGE(30);
      mHealth -= temp;
      playerMessage = `Player strong attack dose ${temp}!`;
    } else if (attackMode === NORMAL_ATTACK && pHealth >= 1) {
      let temp = DAMAGE(10);
      mHealth -= temp;
      playerMessage = `Player attack dose ${temp}`;
    }
    if (mHealth < 20 && monsterHeal && mHealth >= 1) {
      mHealth = mStartingHealth;
      monsterHeal = false;
      monsterMessage = `Monster Heals to ${mStartingHealth}`;
    } else if (pHealth < 15 && monsterStrongAttact && mHealth >= 1) {
      let temp = DAMAGE(30);
      pHealth -= temp;
      monsterStrongAttact = false;
      monsterMessage = `Monster strong attack dose ${temp}!`;
    } else {
      let temp = DAMAGE(10);
      monsterMessage = `Monster attack dose ${temp}`;
      pHealth -= temp;
    }

    if (combatLog) {
      console.dir(`${playerMessage} and ${monsterMessage}!`);
    }
    playerHealthBar.max = pStartingHealth;
    monsterHealthBar.max = mStartingHealth;
    playerHealthBar.value = pHealth;
    monsterHealthBar.value = mHealth;
  };

  if (mHealth <= 0 && pHealth > 0) {
    console.log(`You Wins with ${pHealth} Health left!!! :)`);
    startGame();
  } else if (pHealth <= 0 && mHealth > 0) {
    console.log(`Monster Wins with ${mHealth} Health left!`);
    startGame();
  } else if (pHealth <= 0 && mHealth <= 0) {
    console.log('We have a draw! starting new game.');
    startGame();
  } else {
    combatRound.call(this, attackMode);
  }
}
function startGame() {
  

  pBonesLife = 1;
  bonusLifeEl.innerHTML = pBonesLife;
  monsterStrongAttact = true;
  monsterHeal = true;
  strongAttackBtn.disabled = false;
  healBtn.disabled = false;
  pHealth = pStartingHealth;
  mHealth = mStartingHealth;
  playerHealthBar.value = mHealth;
  monsterHealthBar.value = pHealth;
}
