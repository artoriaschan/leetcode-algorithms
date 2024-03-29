/**
 * @param {number} n
 * @return {number[]}
 */
// 动态规划
function dicesProbability(n) {
  // 因为最后的结果只与前一个动态转移数组有关，所以这里只需要设置一个一维的动态转移数组
  // 原本 dp[i][j] 表示的是前 i 个骰子的点数之和为 j 的概率，现在只需要最后的状态的数组，所以就只用一个一维数组 dp[j] 表示 n 个骰子下每个结果的概率。
  // 初始是 1 个骰子情况下的点数之和情况，就只有 6 个结果，所以用dp的初始化的size是6个
  let dp = new Array(6).fill(1 / 6);
  for (let i = 2; i <= n; i++) {
    // 每次的点数之和范围会有点变化，点数之和的值最大是 i * 6 ，最小是 i * 1 ，i 之前的结果值是不会出现的；
    // 比如 i = 3 个骰子时，最小就是 3 了，不可能是 2 和 1，所以点数之和的值的个数是 6 * i - (i - 1)，化简：5 * i + 1
    const temp = new Array(5 * i + 1).fill(0);
    // 从 i - 1 个骰子的点数之和的值数组入手，计算 i 个骰子的点数之和数组的值
    // 先拿 i - 1 个骰子的点数之和数组的第 j 个值，它所影响的是 i 个骰子时的 temp[j + k] 的值
    for (let j = 0; j < dp.length; j++) {
      for (let k = 0; k < 6; k++) {
        // 这里记得是加上 dp 数组值与 1 / 6 的乘积，1 / 6 是第 i 个骰子投出某个值的概率
        temp[j + k] += dp[j] / 6;
      }
    }
    dp = temp;
  }
  return dp;
}
