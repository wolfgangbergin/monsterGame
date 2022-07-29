const playerHealthBar = document.getElementById('player-health');
const monsterHealthBar = document.getElementById('monster-health');
const bonusLifeEl = document.getElementById('bonus-life');

let combatLog = false


let  pBonesLife = 1
bonusLifeEl.innerHTML = pBonesLife

let monsterStrongAttact = true;
let monsterHeal = true;
let mHealth = 100;
let pHealth = 100;

let roundNumber = 0;

export let gameLog = ()=>{
 combatLog = !combatLog
 
}

export function round(modifier) {
  roundNumber += 1;
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
    
    if (modifier === 'heal' && pBonesLife > 0) {
      pBonesLife = 0
      bonusLifeEl.innerHTML = pBonesLife
      pHealth = 100;
    } else {
      mHealth -= damage(modifier);
    }
    if (mHealth < 10 && monsterHeal) {
      mHealth = 100;
      monsterHeal = false;
    } else if (mHealth < 30 && monsterStrongAttact) {
      pHealth -= damage(20);
      monsterStrongAttact = false;
    } else {
      pHealth -= damage(10);
    }
    if (combatLog){
      console.log(combatLog)
    }

    monsterHealthBar.value = mHealth;
    playerHealthBar.value = pHealth;
  };
  attack.call(this, modifier);
}
