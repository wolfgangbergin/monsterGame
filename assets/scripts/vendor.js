import {attack} from './app.js'


const playerHealthBar = document.getElementById('player-health');
const bonusLifeEl = document.getElementById('bonus-life');

const attackBtn = document.getElementById('attack-btn');
const strongAttackBtn = document.getElementById('strong-attack-btn');
const healBtn = document.getElementById('heal-btn');
const logBtn = document.getElementById('log-btn');
const consoleLog = document.getElementById('console-Log');


attackBtn.addEventListener('click',()=>attack.call(this, 10))
strongAttackBtn.addEventListener('click',()=>attack.call(this, 20))




