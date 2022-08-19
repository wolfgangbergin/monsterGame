export function* simpleGenerator(object) {
  let newArray = [];
  let arrayOfKeys = Object.keys(object);
  console.log(`wolfTest: ${arrayOfKeys}`);
  let size = arrayOfKeys.length;
  for (let i = size; i > 0; i = i - 1) {
    
    let wolf = yield `${i}: ${object[arrayOfKeys[i]]}`;

    size = size - wolf;
  }

  return 'banana';
}
