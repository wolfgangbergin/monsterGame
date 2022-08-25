
export const ARRAY = ['b', true, 1975, 1994, 'f', 'g', 1997, 'hellow', false, ['NaN']];

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

export let middleEarth = {
  towns: ['detorit ', 'ann arbor ', ],
  races: ['black ', 'white ', 'brown ', ],
};
middleEarth.creator = 'J.R.R. Tolkien ';
Object.defineProperty(middleEarth, 'age ', {
  value: '47',
  enumerable: true,
});

export function steve() {
//   for (const key in names) {
//     dirWolf(`of names: ${names[key]}`);
//   }

  for (const key in names) {
    dirWolf(`in names: ${key}`);
  }
}

