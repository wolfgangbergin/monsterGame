let  names = ['wolfman', 'bergin']
names.age = 47
let JOHNNY5 = 'johnny' + ((10 * 2) / 5 + 1);
let wolfObj = {
  pickup: 'Chevy Silverado',
  address: `16716 lola`,
  legelAge: 16,
  ['peanut butter']: 'all natural',
  ['plane ticket']: 'CUBA',
  car: 'fictional car',
  prop3: undefined,
  johnny5: JOHNNY5,
  legalAgeMeth(param1) {
    switch (true) {
      case this.legelAge <= param1:
        return true;
    }
  },
};

let wolfArray = 'wolfgang';

let testJo = 0
for (const value of wolfArray) {
 
 
  //log(`value: ${value}`);
  
 
}
for (const key in wolfObj) {
 
 
  //console.log(`key: ${key}`);
  
  testJo ++
}

let rum =  44;

export let kimbo = () => {
  let testAge = 26;
  function testFunc(param1 = 91) {
    !wolfObj.legalAgeMeth(testAge)
      ? log(`u are not Old enough to drink!`)
      : !!(param1 && wolfObj.legalAgeMeth(testAge))
      ? log(`Have some rum we have ${param1} bottles left!`)
      : !param1
      ? log(` We are out of rum!`)
      : log(error);
  }
  testFunc(rum);
};
