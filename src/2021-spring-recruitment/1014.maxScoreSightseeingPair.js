/**
 * @param {number[]} A
 * @return {number}
 */
// 枚举
function maxScoreSightseeingPair(A) {
  let ans = 0;
  // 维护 A[i] + i 的最大值，因为 A[j] − j 是固定不变的
  let max = A[0] + 0;
  for (let i = 1; i < A.length; i++) {
    ans = Math.max(ans, max + A[i] - i);
    max = Math.max(max, A[i] + i);
  }
  return ans;
}
