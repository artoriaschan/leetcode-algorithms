// https://leetcode-cn.com/problems/beautiful-arrangement/
/**
 * @param {number} n
 * @return {number}
 */
// 回溯
function countArrangement(n) {
  const vis = new Array(n + 1).fill(0);
  const match = new Array(n + 1).fill(0).map(() => []);
  let num = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i % j === 0 || j % i === 0) {
        match[i].push(j);
      }
    }
  }

  const backtrack = (index, n) => {
    if (index === n + 1) {
      num++;
      return;
    }
    for (const x of match[index]) {
      if (!vis[x]) {
        vis[x] = true;
        backtrack(index + 1, n);
        vis[x] = false;
      }
    }
  };

  backtrack(1, n);
  return num;
}
// 状态压缩 + 动态规划
// 状态定义
// 用一个位数为 n 的二进制数 mask 表示排列中的数被选取的情况, 令 dp[mask] 表示状态为 mask 时的可行方案总数，这样答案即为 dp[2^n − 1]
function countArrangement1(n) {
  const dp = new Array(1 << n).fill(0);
  dp[0] = 1;
  for (let mask = 1; mask < 1 << n; mask++) {
    const num = mask
      .toString(2)
      .split("0")
      .join("").length;
    for (let i = 0; i < n; i++) {
      if ((mask & (1 << i)) !== 0 && (num % (i + 1) === 0 || (i + 1) % num === 0)) {
        dp[mask] += dp[mask ^ (1 << i)];
      }
    }
  }
  return dp[(1 << n) - 1];
}
