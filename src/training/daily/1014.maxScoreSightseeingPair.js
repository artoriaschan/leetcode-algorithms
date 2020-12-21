/**
 * @param {number[]} A
 * @return {number}
 */
// eslint-disable-next-line no-unused-vars
function maxScoreSightseeingPair(A) {
  let ans = 0;
  let mx = A[0] + 0;
  for (let i = 1; i < A.length; ++i) {
    ans = Math.max(ans, mx + A[i] - i);
    mx = Math.max(mx, A[i] + i);
  }
  return ans;
}
