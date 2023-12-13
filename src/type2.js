const { rand, choose, range, randSumIn10 } = require("./common");
const { max, min } = Math;

function type1_1() {
  const [a, b] = randSumIn10();

  if (Math.random() < 0.5) {
    if (Math.random() < 0.5) {
      console.log(`(   )+${b}=${a + b}`);
    } else {
      console.log(`${b}+(   )=${a + b}`);
    }
  } else {
    if (Math.random() < 0.5) {
      console.log(`${a + b}-(   )=${b}`);
    } else {
      console.log(`(   )-${a}=${b}`);
    }
  }
}

function type1_2() {
  const dice = Math.random();

  if (dice < 0.25) {
    let [a, b] = randSumIn10();
    let [c, d] = randSumIn10(a + b);
    while (b == 0) {
      [a, b] = randSumIn10();
      [c, d] = randSumIn10(a + b);
    }
    if (Math.random() < 0.5) {
      console.log(`${a}+(   )=${c}+${d}`);
    } else {
      console.log(`(   )+${b}=${c}+${d}`);
    }
  } else if (dice < 0.5) {
    let [val, d] = randSumIn10();
    let c = val + d;
    let [a, b] = randSumIn10(val);
    while (b == 0) {
      [val, d] = randSumIn10();
      c = val + d;
      [a, b] = randSumIn10(val);
    }
    if (Math.random() < 0.5) {
      console.log(`${a}+(   )=${c}-${d}`);
    } else {
      console.log(`(   )+${b}=${c}-${d}`);
    }
  } else if (dice < 0.75) {
    let [val, d] = randSumIn10();
    let c = val + d;
    let [a, b] = randSumIn10(val);
    while (d == 0) {
      [val, d] = randSumIn10();
      c = val + d;
      [a, b] = randSumIn10(val);
    }
    if (Math.random() < 0.5) {
      console.log(`${c}-(   )=${a}+${b}`);
    } else {
      console.log(`(   )-${d}=${a}+${b}`);
    }
  } else {
    const val = rand(6);
    let b = rand(10 - val);
    let d = rand(10 - val);
    while (b == d || b == 0) {
      b = rand(10 - val);
      d = rand(10 - val);
    }
    const a = val + b;
    const c = val + d;

    if (Math.random() < 0.5) {
      console.log(`${a}-(   )=${c}-${d}`);
    } else {
      console.log(`(   )-${b}=${c}-${d}`);
    }
  }
}

function generate() {
  for (let i = 0; i < 25; i++) {
    if (Math.random() < 0.8) {
      type1_1();
    } else {
      type1_2();
    }
  }
}
generate();
