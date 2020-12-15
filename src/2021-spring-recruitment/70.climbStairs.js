/**
 * @param {number} n
 * @return {number}
 */
// 动态规划
function climbStairs(n) {
  let prepre = 0;
  let pre = 0;
  let ans = 1;
  for (let i = 0; i < n; i++) {
    prepre = pre;
    pre = ans;
    ans = prepre + pre;
  }
  return ans;
}
// 尾递归
function climbStairs1(n) {
  function cs(n, ret1, ret2) {
    // 递到底了
    if (n === 0) {
      return ret1;
    }
    return cs(n - 1, ret2, ret1 + ret2);
  }
  return cs(n, 1, 1);
}
