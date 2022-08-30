

 
try {
 
let mySyntaxError = new SyntaxError('my SyntaxError 1')
  
  const BANANA = 99;
  BANANA = 100
  
 if (true){
  throw mySyntaxError
 }
  

  
} catch (err) {
  
  if (err.name === 'ReferenceError') {
    console.dir(`name: ${err.name},  meassage: ${err.message}`);
    console.dir(err);
  } else 
  if (err.name === 'SyntaxError') {
    console.dir(`name: ${err.name},  meassage: ${err.message}`);
    console.dir(err);
  } else 
  if (err) {
    console.dir(err)
   
  }

} finally {
  console.log('end');
}

export function jobob(...props) {}
