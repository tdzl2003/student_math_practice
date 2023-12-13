// random: 0 to x-1
function rand(x) {
  return Math.floor(Math.random() * x);
}
exports.rand = rand;

function range(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}
exports.range = range;

function choose(arr) {
  const v = rand(arr.length);
  return arr[v];
}
exports.choose = choose;

function randSumIn10(sum = rand(10) + 1) {
  const a = rand(sum + 1);
  const b = sum - a;
  return [a, b];
}
exports.randSumIn10 = randSumIn10;
