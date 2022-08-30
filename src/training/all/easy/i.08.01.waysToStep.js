/**
 * @param {number} n
 * @return {number}
 */
function waysToStep(n) {
  let dp = [];
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 4;
  for (let i = 4; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
    dp[i] %= 1000000007;
  }
  return dp[n];
}

function waysToStep1(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;
  if (n === 3) return 4;
  let dp1 = 1;
  let dp2 = 2;
  let dp3 = 4;
  let res = 0;
  for (let i = 4; i <= n; i++) {
    res = dp1 + dp2 + dp3;
    res %= 1000000007;
    dp1 = dp2;
    dp2 = dp3;
    dp3 = res;
  }
  return res;
}
