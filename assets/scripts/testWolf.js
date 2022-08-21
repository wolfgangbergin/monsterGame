const ARRAY = ['b', true, 1975, 1994, 'f', 'g', 1997, 'hellow', false, ['NaN']];
const LENGTH = ARRAY.length;
let i = -1;
const NEW_ARRAY = [];

export function testWolf() {
  outerLoop: for (let y = 10; y; --y) {
    
  innerLoop: while (i < LENGTH - 1) {
    ++i;
    if (typeof ARRAY[i] !== 'number') {
      continue;
    }else if (i === 3){
        console.log(i === 3)
        break outerLoop;
    }  else if (typeof ARRAY[i] === 'number') {
      let temp = new Date().getFullYear() - ARRAY[i];
      NEW_ARRAY.push(`  ${ARRAY[i]}  ${typeof ARRAY[i]} AGE:${temp}`);
      continue;
    }
  
  }
  console.dir(`${NEW_ARRAY}`);
  
}

}
