const playerHealthBar = document.getElementById('player-health');
const monsterHealthBar = document.getElementById('monster-health');
let mHealth = 100;
let pHealth = 100;


export function round(modifier) {
  
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
      pHealth += damage(10);
  
    } else {
      mHealth -= damage(modifier);
    }

    pHealth -= damage(10);
    monsterHealthBar.value = mHealth;
    playerHealthBar.value = pHealth;
  };
  attack.call(this, modifier);
}
