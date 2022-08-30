try {
    const BANANA = b;
  
    if (!!BANANA) {
      throw new SyntaxError('My SyntaxError1');
    }
    switch (true) {
      case !!BANANA:
        console.log('wolfMAN');
        break;
      default:
        console.log('default');
    }
    
  } catch (err) {
    if (err.name === 'ReferenceError') {
      console.dir(`name: ${err.name},  meassage: ${err.message}`);
      console.dir(err);
    } else
    if (err.name === 'SyntaxError') {
      console.dir(`name: ${err.name},  meassage: ${err.message}`);
      console.dir(err);
    } else if (err) {
      console.log(`wolfTest: ${err}`)
    }
  } finally {
    console.log('end');
  }
  
  export function jobob(...props) {}
  