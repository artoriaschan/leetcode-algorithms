/**
 * @param {number[]} arr
 * @return {number}
 */
function lenLongestFibSubseq(arr) {
  const indices = new Map();
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    indices.set(arr[i], i);
  }
  // arr[i] > arr[j] > arr[k] 且 arr[k] + arr[j] = arr[i]，等价于 i > j > k
  // dp[j][i] 表示以 arr[j] 和 arr[i] 作为最后两个数字的斐波那契子序列的最大长度
  const dp = new Array(n).fill(0).map(() => new Array(n).fill(0));
  let ans = 0;
  for (let i = 0; i < n; i++) {
    for (let j = n - 1; j >= 0; j--) {
      // 只有当 arr[j] × 2 > arr[i] 时才满足 arr[k] < arr[j]
      if (arr[j] * 2 <= arr[i]) {
        break;
      }
      if (indices.has(arr[i] - arr[j])) {
        // 获取第三个数的下标
        const k = indices.get(arr[i] - arr[j]);
        // 状态转移
        dp[j][i] = Math.max(dp[k][j] + 1, 3);
        ans = Math.max(ans, dp[j][i]);
      }
    }
  }
  return ans;
}
