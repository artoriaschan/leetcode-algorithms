/* eslint-disable camelcase */
/**
 * @param {number} num_people
 * @return {number}
 * 思路:
 *  动态规划:
 *    本质根据连线不会相交将元素分为两部分,分别求每一部分的组合, 最后相乘
 *    https://leetcode-cn.com/problems/handshakes-that-dont-cross/solution/dp-by-mike-meng-16/
 *  Lucas定理
 */
// eslint-disable-next-line no-unused-vars
function numberOfWays(num_people) {
  const mod = BigInt(1000000007);
  let n = num_people;

  const dp = new Array(n + 1).fill(BigInt(0));
  dp[0] = BigInt(1);
  dp[2] = BigInt(1);
  for (let i = 4; i <= n; i += 2) {
    for (let j = 0; j < i; j += 2) {
      dp[i] = (dp[i] + ((dp[j] * dp[i - 2 - j]) % mod)) % mod;
    }
  }
  return dp[n];
}
