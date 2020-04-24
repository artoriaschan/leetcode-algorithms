/**
 * @param {number[]} A
 * @return {number}
 */
// eslint-disable-next-line no-unused-vars
function sumOfDigits(A) {
  A.sort((a, b) => a - b);
  let min = A[0].toString().split("");
  return min.reduce((a, b) => a + parseInt(b, 10), 0) % 2 === 0 ? 1 : 0;
}
