/**
 * @param {number[]} A
 * @return {number[]}
 */
function sortArrayByParity(A) {
  const even = [];
  const odds = [];
  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      even.push(A[i]);
    } else {
      odds.push(A[i]);
    }
  }
  return even.concat(odds);
}
