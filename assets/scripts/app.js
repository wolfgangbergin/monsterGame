const playerHealthBar = document.getElementById('player-health');
const monsterHealthBar = document.getElementById('monster-health');
let mHealth = 100;
let pHealth = 100;

export function round(modifier) {
  let damage = (param1) => {
    return Math.round(Math.random() * param1);
  };

  let attack = (modifier = 1) => {
    console.log(modifier);
    mHealth -= damage(modifier);
    pHealth -= damage(modifier);
    monsterHealthBar.value = mHealth;
    playerHealthBar.value = pHealth;
  };
  attack.call(this, modifier);
}
