/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
// eslint-disable-next-line no-unused-vars
function anagramMappings(A, B) {
  let len = A.length;
  let ans = [];
  for (let i = 0; i < len; i++) {
    ans[i] = B.indexOf(A[i]);
  }
  return ans;
}
