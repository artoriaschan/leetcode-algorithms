/**
 * @param {number} n
 * @return {number}
 */
// eslint-disable-next-line no-unused-vars
function sumNums(n) {
  // eslint-disable-next-line no-unused-expressions
  n && (n += sumNums(n - 1));
  return n;
}
