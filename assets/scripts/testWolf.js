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
    if (i * FIVE > ONEHUNDRED) {
    } else {
      fiveArray.push(i * FIVE);
    }

    if (i * THREE > ONEHUNDRED) {
    } else {
      threeArray.push(i * THREE);
    }
  }

  let newFun = (param1, param2) => {
    let kimBo1 = 0;
    let kimBo2 = 0;
    for(const value2 of param2){
        kimBo2 += value2
    }
    for (const value1 of param1) {
        kimBo1 += value1;
      for (const value2 of param2) {
       
       
        if (value1 === value2) {
          subNumber += value2;
        }
      }
    }
    console.log(`wolfTest: ${subNumber}`)
    return kimBo1 + kimBo2 - subNumber;
  };
  console.log(`wolfTest: ${fiveArray}`)
  console.log(`wolfTest: ${newFun(threeArray, fiveArray)}`);
}
console.log(`wolfTest: ${15+30+45+60+75+90}`)