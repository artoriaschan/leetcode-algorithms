/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
function smallestRangeI(A, K) {
  const min = Math.min(...A);
  const max = Math.max(...A);
  return Math.max(0, max - min - 2 * K);
}
