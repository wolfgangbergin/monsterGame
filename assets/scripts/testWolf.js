import { middleEarth, ARRAY } from './steve.js';
const iC = _.range(1, 41);

let subNumber = 0;
const LENGTH = 10;
const ONEHUNDRED = 100;
const wolf_obj = {};
const THREE = 3;
const FIVE = 5;

export function testWolf() {
  let threeArray = [];
  let fiveArray = [];
  for (let i = 1; i <= ONEHUNDRED; i++) {
    !(i * FIVE > ONEHUNDRED) && fiveArray.push(i * FIVE);
    !(i * THREE > ONEHUNDRED) && threeArray.push(i * THREE);
  }

 const union = new Set([...threeArray, ...fiveArray])
 let sum = 0
for (const value of union){
  sum += value
  
}
console.log(`wolfTest: ${sum}`)
}


const kimTest = Array.from({name:'wolf', age: 47})
// console.log(`wolfTest: ${kimTest}`)