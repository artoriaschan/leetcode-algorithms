/**
 * @param {number[]} nums
 * @return {number}
 */
// 记忆化搜索
function maxCoins(nums) {
  const n = nums.length;
  const val = new Array(n + 2);
  for (let i = 1; i <= n; i++) {
    val[i] = nums[i - 1];
  }
  // 增加 val[-1] 和 val[n] 为 1
  val[0] = 1;
  val[n + 1] = 1;
  const memo = new Array(n + 2).fill(0).map(() => new Array(n + 2).fill(-1));
  return solve(0, n + 1, val, memo);
}

// 将全过程看作是每次添加一个气球
function solve(left, right, val, memo) {
  if (left >= right - 1) return 0;
  if (memo[left][right] !== -1) return memo[left][right];
  for (let i = left + 1; i < right; i++) {
    let sum = val[left] * val[i] * val[right];
    sum += solve(left, i, val, memo) + solve(i, right, val, memo);
    memo[left][right] = Math.max(memo[left][right], sum);
  }
  return memo[left][right];
}

// 动态规划
function maxCoins1(nums) {
  const n = nums.length;
  const val = new Array(n + 2);
  for (let i = 1; i <= n; i++) {
    val[i] = nums[i - 1];
  }
  // 增加 val[-1] 和 val[n] 为 1
  val[0] = 1;
  val[n + 1] = 1;
  const dp = new Array(n + 2).fill(0).map(() => new Array(n + 2).fill(0));

  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 2; j <= n + 1; j++) {
      for (let k = i + 1; k < j; k++) {
        let sum = val[i] * val[k] * val[j];
        sum += dp[i][k] + dp[k][j];
        dp[i][j] = Math.max(dp[i][j], sum);
      }
    }
  }

  return dp[0][n + 1];
}
