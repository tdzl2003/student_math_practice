const { rand, choose, range, randSumIn10 } = require("./common");
const { max, min } = Math;

function type4_1() {
  const dice = Math.random();
  if (dice < 0.5) {
    // a+() < c / ()+b < c
    const [a, b] = randSumIn10(rand(9) + 1);
    const c = a + b + 1;

    if (dice < 0.25) {
      console.log(`(   )+${b}<${c}`);
    } else {
      console.log(`${a}+(   )<${c}`);
    }
  } else {
    // a + b > ()
    const [a, b] = randSumIn10(rand(10) + 1);
    console.log(`${a}+${b}>(   )`);
  }
}

function generate() {
  for (let i = 0; i < 15; i++) {
    type4_1();
  }
}
generate();
