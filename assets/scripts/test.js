let temp = 55;
export let wolfman = () => {
  switch (temp) {
    case 'wolfMan':
      return temp;
    case isNaN(temp):
      return 66;
    case 22:
      console.dir(`wolfManTest2: ${temp}`);
      return 35;
    case temp > 100:
      return 99;
    default:
      console.dir(`wolfManTest: ${temp}`);
      return 65;
  }
};

let wolfgang = {
  pickup: 'Chevy Silverado',
  address: `16716 lola`,
  age: 47,
  ['peanut butter']: 'all natural',
  ['plane ticket']: 'CUBA',
  //car: 'fictional car'
};

export let kimbo = () => {
  if ('peanut butter' in wolfgang) {
    console.log(`wolfgang's type of beanut: ${wolfgang['peanut butter']}`);
  } else if ('pickups' in wolfgang) {
    console.dir(`wolfManTest: ${wolfgang.pickup}`);
  } else if (`addresss` in wolfgang) {
    console.log(`wolfManTest: ${wolfgang.address}`);
  } else if (`age` in wolfgang) {
    console.log(`wolfManTest: ${wolfgang.age}`);
  } else {
    console.dir(`not working`);
  }

  if ('plane ticket' in wolfgang) {
    console.log(`next vacation: ${wolfgang['plane ticket']} :-)`);
  } else {
    console.log(` no vacation planned :-(`);
  }
  if ('car' in wolfgang){
   console.log(`wolfgang's car ${wolfgang[`car`]}`)
  }else{
    console.log(`wolfgang has on car!!!`)
  }
};
