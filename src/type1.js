const { rand, choose, range, randSumIn10 } = require("./common");
const { max, min } = Math;

// 4 ◯ 1 = 3  fill with + or -
function type1_1() {
  let [a, b] = randSumIn10();
  while (b == 0) {
    [a, b] = randSumIn10();
  }

  if (Math.random() < 0.5) {
    console.log(`${a}◯${b}=${a + b}`);
  } else {
    console.log(`${a + b}◯${b}=${a}`);
  }
}

// 5 ◯ 4 = 7 - 6  fill with + or -
function type1_2() {
  const dice = Math.random();

  if (dice < 0.25) {
    let [a, b] = randSumIn10();
    let [c, d] = randSumIn10(a + b);
    while (b == 0) {
      [a, b] = randSumIn10();
      [c, d] = randSumIn10(a + b);
    }
    console.log(`${a}◯${b}=${c}+${d}`);
  } else if (dice < 0.5) {
    let [val, d] = randSumIn10();
    let c = val + d;
    let [a, b] = randSumIn10(val);
    while (b == 0) {
      [val, d] = randSumIn10();
      c = val + d;
      [a, b] = randSumIn10(val);
    }
    console.log(`${a}◯${b}=${c}-${d}`);
  } else if (dice < 0.75) {
    let [val, d] = randSumIn10();
    let c = val + d;
    let [a, b] = randSumIn10(val);
    while (d == 0) {
      [val, d] = randSumIn10();
      c = val + d;
      [a, b] = randSumIn10(val);
    }
    console.log(`${c}◯${d}=${a}+${b}`);
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

    console.log(`${a}◯${b}=${c}-${d}`);
  }
}

function type1_3() {
  const dice = Math.random();

  if (dice < 0.25) {
    let [a, b] = randSumIn10();
    let [c, d] = randSumIn10(a + b);
    while (a == c || a == d || b == 0 || d == 0) {
      [a, b] = randSumIn10();
      [c, d] = randSumIn10(a + b);
    }
    console.log(`${a}◯${b}=${c}◯${d}`);
  } else if (dice < 0.5) {
    let [val, d] = randSumIn10();
    let c = val + d;
    let [a, b] = randSumIn10(val);
    while (b == 0 || d == 0) {
      [val, d] = randSumIn10();
      c = val + d;
      [a, b] = randSumIn10(val);
    }
    console.log(`${a}◯${b}=${c}◯${d}`);
  } else if (dice < 0.75) {
    let [val, d] = randSumIn10();
    let c = val + d;
    let [a, b] = randSumIn10(val);
    while (b == 0 || d == 0) {
      [val, d] = randSumIn10();
      c = val + d;
      [a, b] = randSumIn10(val);
    }
    console.log(`${c}◯${d}=${a}◯${b}`);
  } else {
    const val = rand(6);
    let b = rand(10 - val);
    let d = rand(10 - val);
    while (b == d || b == 0 || d == 0) {
      b = rand(10 - val);
      d = rand(10 - val);
    }
    const a = val + b;
    const c = val + d;

    console.log(`${a}◯${b}=${c}◯${d}`);
  }
}

function generate() {
  for (let i = 0; i < 50; i++) {
    const dice = Math.random();
    if (dice < 0.8) {
      type1_1();
    } else if (dice < 0.9) {
      type1_2();
    } else {
      type1_3();
    }
  }
}

generate();
