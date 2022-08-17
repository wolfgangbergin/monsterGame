let wolfObj = {
    pickup: 'Chevy Silverado',
    address: `16716 lola`,
    legelAge: 16,
    ['peanut butter']: 'all natural',
    ['plane ticket']: 'CUBA',
    car: 'fictional car',
    prop3: !undefined,
    johnny5: 'JOHNNY5',
    legalAgeMeth(param1) {
      switch (true) {
        case this.legelAge <= param1:
          return true;
      }
    },
    age: 47,
    profession: 'Computer programming',
    Hobbies: 'swimming',
  };
 
export function* simpleGenerator(array,) {
 let size = Object.keys(wolfObj).length
 
  for (const key in wolfObj) {
   let wolf = yield [key, size];
   
    size = size - wolf
    console.log(`${size}: ${key}: ${wolfObj[key]}`)
  }

  return 'banana';
}
