/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 * 思路:
 *  动态规划
 */
// eslint-disable-next-line no-unused-vars
function mincostTickets(days, costs) {
  let dp = new Array(366 + 30).fill(0);
  let n = days.length;
  let maxDay = days[n - 1];
  let minDay = days[0];
  let k = n - 1;

  for (let i = maxDay; i >= minDay; i--) {
    if (i === days[k]) {
      dp[i] = Math.min(dp[i + 1] + costs[0], dp[i + 7] + costs[1], dp[i + 30] + costs[2]);
      k--;
    } else {
      dp[i] = dp[i + 1];
    }
  }

  return dp[minDay];
}
