let temp = 55
export let wolfman = () => {
    switch (temp) {
        case 'wolfMan':
          return temp;
        case isNaN(temp):
          return 66;
        case 22:
          console.dir(`wolfManTest2: ${temp}`)
          return 35;
        case temp > 100:
          return 99;
        default:
          console.dir(`wolfManTest: ${temp}`)
          return 65;
      }
};
