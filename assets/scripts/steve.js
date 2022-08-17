

// const wolfObj = {
//   0: 'a',
//   1: 'b',
//   name: 'kinbo',
// };

let names = ['jo', 'bob', 'rick', 'kim'];
names.business = 'action';
Object.defineProperty(names, 'phoneNumber', {
  value: '313-255-7102',
  enumerable: true,
  configurable: true,
  writable: true,
});

let middleEarth = {
  towns: ['detorit', 'ann arbor'],
  races: ['black', 'white', 'brown'],
};
middleEarth.creator = 'J.R.R. Tolkien';
Object.defineProperty(middleEarth, 'age', {
  value: '47',
  enumerable: false,
});

export function steve() {
//   for (const key in names) {
//     dirWolf(`of names: ${names[key]}`);
//   }

  for (const key in names) {
    dirWolf(`in names: ${key}`);
  }
}

