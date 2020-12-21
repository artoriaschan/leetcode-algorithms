/**
 * @param {number} n
 * @return {string}
 * 思路:
 *  模拟
 */
// eslint-disable-next-line no-unused-vars
function findContestMatch(n) {
  let team = new Array(n).fill("");
  for (let i = 1; i <= n; ++i) team[i - 1] = "" + i;
  for (; n > 1; n /= 2) for (let i = 0; i < n / 2; ++i) team[i] = "(" + team[i] + "," + team[n - 1 - i] + ")";
  return team[0];
}
