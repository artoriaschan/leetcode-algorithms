/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 * 思路:
 *  1. 暴力
 *  2. 快速幂算法 (递归)
 */
const assert = require("assert");
function myPow1(x, n) {
  if (n < 0) return 1 / myPow1(x, -n);
  if (n === 0) return 1;
  if (n % 2 === 0) return myPow1(x * x, Math.floor(n / 2));
  return myPow1(x * x, Math.floor(n / 2)) * x;
}

const result1 = myPow1(2.0, 10);
console.log(result1);
assert.strictEqual(result1, 1024.0);
