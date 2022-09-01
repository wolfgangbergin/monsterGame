const WOLF = 'wolfMan' || (() => 0)();
const FALSE = false;
const TESTMICH = FALSE || (WOLF && (() => 'kim22')());
console.log(`TESTMICH: ${TESTMICH}`);

// const JOBOB = WOLF && 100;

// switch (true) {
//   case (KIM && WOLF === 'wolf') || JOBOB > 99:
//     console.log(`&& || Operator`);
//     break;
//   case WOLF === 'wolf':
//     console.log('wolf');
//     break;
//   case WOLF === '':
//     console.log('empty string!');
//     break;
//   case WOLF === true:
//     console.log('true');
//     break;
//   case WOLF === false:
//     console.log('false');
//     break;
//   case WOLF === undefined:
//     console.log('undefined');
//     break;
//   default:
//     console.log('default');
//     break;
// }

export function jobob(...props) {}
