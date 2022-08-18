/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findLength(nums1, nums2) {
  const n = nums1.length;
  const m = nums2.length;
  const dp = Array.from(new Array(n + 1), () => new Array(m + 1).fill(0));
  let ans = 0;
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      dp[i][j] = nums1[i] === nums2[j] ? dp[i + 1][j + 1] + 1 : 0;
      ans = Math.max(ans, dp[i][j]);
    }
  }
  return ans;
}
