let array = ['a', 'b', 'c','d', 'e', 'f','g', 'h', 'i','j',];
let i = 8;
export let wolfMan = () => {
  i--;
    console.log(`${i}`)
    console.log(`i: ${array[i]}`);
  if (i === 5) {
    
    //  return;
  } else
   if (!!i) {
    wolfMan();
    
  }
    console.log(`i: ${array[i]}`);
};
