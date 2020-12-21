/**
 * @param {number} n
 * @return {number}
 */
// 短路效应
function sumNums(n) {
  // eslint-disable-next-line no-unused-expressions
  n > 0 && (n += sumNums(n - 1));
  return n;
}
