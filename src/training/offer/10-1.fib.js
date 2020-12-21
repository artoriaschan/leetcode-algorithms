/**
 * @param {number} n
 * @return {number}
 */
function fib(n) {
  let prepre = 0;
  let pre = 1;
  let sum;
  for (let i = 0; i < n; i++) {
    sum = (pre + prepre) % 1000000007;
    prepre = pre;
    pre = sum;
  }
  return prepre;
}
function fib1(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fib1(n - 1) + fib1(n - 2);
}
