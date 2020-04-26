/**
 * @param {number[]} A
 * @return {number}
 */
// eslint-disable-next-line no-unused-vars
function fixedPoint(A) {
  let ans = -1;
  for (let i = 0; i < A.length; i++) {
    if (A[i] === i) {
      ans = i;
      break;
    }
  }
  return ans;
}
