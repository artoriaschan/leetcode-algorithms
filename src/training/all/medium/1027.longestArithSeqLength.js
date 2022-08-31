/**
 * @param {number[]} nums
 * @return {number}
 */
function longestArithSeqLength(nums) {
  const indices = new Map([[nums[0], 0]]);
  const n = nums.length;
  // dp[i][j] 表示以 nums[i] 和 nums[j] 作为最后两个数的等差数列的最大长度
  const dp = new Array(n).fill(0).map(() => new Array(n).fill(0));
  let max = 0;
  for (let i = 1; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      // 根据公差求解 nums[i] 前面的数
      const prev = nums[i] - (nums[j] - nums[i]);
      if (indices.has(prev)) {
        // 对比当前 dp[i][j] 和 dp[k][i] 中的最大长度为 dp[i][j] 的最终值
        // k 是根据公差求得的 i 的前一个等差数的对应的下标
        dp[i][j] = Math.max(dp[i][j], dp[indices.get(prev)][i] + 1);
        max = Math.max(max, dp[i][j]);
      }
    }
    indices.set(nums[i], i);
  }
  return max + 2;
}
