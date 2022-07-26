const playerHealthBar = document.getElementById('player-health');
const monsterHealthBar = document.getElementById('monster-health');
let monsterStrongAttact = true;
let monsterHeal = true;
let mHealth = 100;
let pHealth = 100;
let roundNumber = 0;

export function round(modifier) {
  roundNumber += 1
  if (mHealth === 0 && pHealth === 0) {
    console.log('Its a tie game');
    return;
  } else if (mHealth < 1) {
    console.log('Player Wins');
    return;
  } else if (pHealth < 1) {
    console.log('Monster Wins!');
    return;
  }
  let damage = (param1) => Math.round(Math.random() * param1);

  let attack = (modifier) => {
    if (modifier === '+') {
      pHealth += damage(20);
    } else {
      mHealth -= damage(modifier);
    }
    if (mHealth < 50 && monsterHeal) {
      mHealth += damage(20);
      monsterHeal = false;
    } else if (mHealth < 30 && monsterStrongAttact ) {
      pHealth -= damage(20);
      monsterStrongAttact = false;
    } else {
      pHealth -= damage(10);
    }

    monsterHealthBar.value = mHealth;
    playerHealthBar.value = pHealth;
  };
  attack.call(this, modifier);
}
