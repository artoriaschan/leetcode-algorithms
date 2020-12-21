/**
 * @param {number} n - a positive integer
 * @return {number}
 */
// 位运算
// 超时
function hammingWeight(n) {
  let count = 0;
  while (n !== 0) {
    count += n & 1;
    n >>= 1;
  }
  return count;
}

function hammingWeight1(n) {
  let count = 0;
  while (n !== 0) {
    count++;
    n &= n - 1;
  }
  return count;
}
