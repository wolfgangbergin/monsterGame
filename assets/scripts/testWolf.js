export function testWolf() {
  do {
    const wolf = Math.random();
    if (wolf > 0.9) {
      console.log(`alert wolf is = ${wolf}`);
      break;
    } else {
      console.log(`${wolf}`);
    }
  } while (true);
}
