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
export const WOLF_MAN = 'wolfMan';
let logArray = [];
let [pStartingHealth, mStartingHealth] = promtUser();

let pHealth = pStartingHealth;
let mHealth = mStartingHealth;
export let pBonesLife = 1;

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
    let pDamage;
    let mDamage;
    switch (true) {
      case attackMode === HEAL && pBonesLife > 0 && pHealth >= 1:
        bonusLifeEl.innerHTML = pBonesLife -= 1;
        playerMessage = `Player Heals to ${(pHealth = pStartingHealth)}`;
        break;
      case attackMode === STRONG_ATTACK && pHealth >= 1:
        mHealth -= pDamage = DAMAGE(30);
        playerMessage = `Player strong attack dose ${(pDamage = DAMAGE(30))}!`;
        break;
      case attackMode === NORMAL_ATTACK && pHealth >= 1:
        mHealth -= pDamage = DAMAGE(10);
        playerMessage = `Player attack dose ${(pDamage = DAMAGE(10))}`;
        break;
    }
    if (mHealth < 20 && monsterHeal && mHealth >= 1) {
      monsterHeal = false;
      monsterMessage = `Monster Heals to ${(mHealth = mStartingHealth)}`;
    } else if (pHealth < 15 && monsterStrongAttact && mHealth >= 1) {
      monsterStrongAttact = false;
      pHealth -= mDamage = DAMAGE(30);
      monsterMessage = `Monster strong attack dose ${(mDamage = DAMAGE(30))}!`;
    } else {
      pHealth -= mDamage = DAMAGE(10);
      monsterMessage = `Monster attack dose ${(mDamage = DAMAGE(10))}`;
    }

    logArray.push(`${playerMessage} and ${monsterMessage}!`);

    if (combatLog) {
      log(logArray[0]);

      logArray = [];
    }
    playerHealthBar.max = pStartingHealth;
    monsterHealthBar.max = mStartingHealth;
    playerHealthBar.value = pHealth;
    monsterHealthBar.value = mHealth;
  };

  if (mHealth <= 0 && pHealth > 0) {
    startGame();
    console.log(`You Wins with ${pHealth} Health left!!! :)`);
  } else if (pHealth <= 0 && mHealth > 0) {
    startGame();
    console.log(`Monster Wins with ${mHealth} Health left!`);
  } else if (pHealth <= 0 && mHealth <= 0) {
    startGame();
    console.log('We have a draw! starting new game.');
  } else {
    combatRound.call(this, attackMode);
  }
}
function startGame() {
  console.clear();
  let logArray = [];
  pBonesLife = 1;
  bonusLifeEl.innerHTML = pBonesLife;
  monsterStrongAttact = true;
  monsterHeal = true;
  strongAttackBtn.disabled = false;
  healBtn.disabled = false;
  pHealth = pStartingHealth;
  mHealth = mStartingHealth;
  playerHealthBar.value = pHealth;
  monsterHealthBar.value = mHealth;
}
