/**
 * @param {number[]} jump
 * @return {number}
 */
function minJump(jump) {
  const dp = new Array(jump.length).fill(0);
  dp[jump.length - 1] = 1;
  for (let i = jump.length - 2; i > -1; --i) {
    dp[i] = jump[i] + i >= jump.length ? 1 : dp[jump[i] + i] + 1;
    // 遍历当前位置更新后影响到的后面的位置，只需要更新到dp[j] >= dp[i]+1即可
    // 如果遍历到某dp[j]<dp[i]+1就不需要向右遍历了,因为j到dp.length的值会被当前遍历到的dp[j]更新而不是dp[i]+1
    for (let j = i + 1; j < dp.length && dp[j] >= dp[i] + 1; ++j) {
      dp[j] = dp[i] + 1;
    }
  }
  return dp[0];
}
