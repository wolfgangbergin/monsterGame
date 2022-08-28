const a = { name: 'kim', age: 22 };
const b = { name: 'kim', age: 22 };
const c = {};
const myObject1 = {};
myObject1[a] = 'kim';
myObject1[b] = 'wilf';
// console.log(myObject1)
const myObject2 = { name: 'kim', age: 22 };
const numbers = [1, 3, 3, 2, 3];

export function jobob(...props) {
  const mySet = new Set();
  mySet.add({ name: 'wolf' });
 

  const myArray = Array.from(mySet);
  const temp = {...myArray[0]}
 
  myArray[0].name = 'bob'
  for (const value of mySet) {
    console.log(value);
  }
  console.log(myArray[0])
  console.log(temp)
}
