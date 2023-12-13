const { rand, choose, range, randSumIn10 } = require("./common");
const { max, min } = Math;

function type3_1() {
  const dice = Math.random();
  if (dice < 0.25) {
    // a+b, c+d
    const [a, b] = randSumIn10();
    const [c, d] = randSumIn10();
    console.log(`${a}+${b}◯${c}+${d}`);
  } else if (dice < 0.5) {
    const [a, b] = randSumIn10();
    const [c, d] = randSumIn10();
    console.log(`${a + b}-${b}◯${c + d}-${d}`);
  } else {
    const [a, b] = randSumIn10();
    const [c, d] = randSumIn10();
    if (dice < 0.75) {
      console.log(`${a}+${b}◯${c + d}-${d}`);
    } else {
      console.log(`${a + b}-${b}◯${c}+${d}`);
    }
  }
}

function generate() {
  for (let i = 0; i < 25; i++) {
    type3_1();
  }
}
generate();
