/**
 * @param {number} num
 * @return {number}
 * 思路:
 *  动态规划: 「滚动数组」优化动态规划
 */

// 动态规划
// eslint-disable-next-line no-unused-vars
function translateNum(num) {
  let numStr = num.toString();
  let dp = new Array(numStr.length + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= numStr.length; ++i) {
    const temp = Number(numStr[i - 2] + numStr[i - 1]);
    if (temp >= 10 && temp <= 25) {
      dp[i] = dp[i - 1] + dp[i - 2];
    } else {
      dp[i] = dp[i - 1];
    }
  }
  return dp[numStr.length];
}
// 动态规划 + 滚动数组(降维)
// eslint-disable-next-line no-unused-vars
function translateNum1(num) {
  let numStr = num.toString();
  let p = 0;
  let q = 0;
  let r = 1;
  for (let i = 0; i < numStr.length; ++i) {
    p = q;
    q = r;
    r = 0;
    r += q;
    if (i === 0) {
      continue;
    }
    let pre = numStr.substring(i - 1, i + 1);
    if (parseInt(pre, 10) <= 25 && parseInt(pre, 10) >= 10) {
      r += p;
    }
  }
  return r;
}
