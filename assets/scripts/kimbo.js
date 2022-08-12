let JOHNNY5 = 'johnny' + ((10 * 2) / 5 + 1);
let wolfgang = {
  pickup: 'Chevy Silverado',
  address: `16716 lola`,
  legelAge: 21,
  ['peanut butter']: 'all natural',
  ['plane ticket']: 'CUBA',
  car: 'fictional car',
  prop3: undefined,
  johnny5: JOHNNY5,
  testAge(param1) {
    if (this.legelAge > param1) {
      return true;
    }
  },
  legalAge(param1) {
    switch (true) {
      case this.legelAge <= param1:
        return true;
        break;
    }
  },
};

export let kimbo = () => {
  let testAge = 12;
  function innerFunc(param1) {
    switch (true) {
      case !!(true && true && true):
        dir(`can't `);
      
      case false:
        dir(` buy `);
      case false:
        dir(`alcohol.`);
        break;
      case 21 <= testAge:
        dir(`good to go!!`);
        break;
      default:
        log('no Condition met!');
        break;
    }
  }
  innerFunc(JOHNNY5);
};
