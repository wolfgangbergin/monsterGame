
const monsterHealthBar = document.getElementById('monster-health');
let monsterHealth = 100
monsterHealthBar.max = 100

export let  attack = (param1)=>{

    let temp = Math.round(Math.random() * param1)
    
    monsterHealth -= temp
    console.dir(temp)
    monsterHealthBar.value = monsterHealth
}




