const playerHealthBar = document.getElementById('player-health');
const monsterHealthBar = document.getElementById('monster-health');
let mHealth = 100;
let pHealth = 100;


export function round( modifier) {
  let attack = ( modifier = 1, hB) => {
    console.log(modifier)
    let temp = Math.round(Math.random() *  modifier);
    mHealth -= temp;
    pHealth -= temp;
    hB.value = mHealth;
  };
  attack.call(this,  modifier, monsterHealthBar);
  attack.call(this,  undefined, playerHealthBar);
}
