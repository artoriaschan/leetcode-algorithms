/**
 * @param {number} N
 * @return {number}
 * 按键要么按一次, 要么按 k+1 次:
 *  加法（按 1 次）：M 加 1。
 *  乘法（按 k+1 次）：M 乘 k，其中 k >= 2。 => (2 -> 3, 3 -> 4, ..., k -> k + 1)
 * 思路:
 *  动态规划
 */
// eslint-disable-next-line no-unused-vars
function maxA(N) {
  let best = new Array(N + 1).fill(0);
  for (let k = 1; k <= N; ++k) {
    // 加法
    best[k] = best[k - 1] + 1;
    for (let x = 1; x < k - 1; ++x) {
      // 乘法与加法比较
      best[k] = Math.max(best[k], best[x] * (k - x - 1));
    }
  }
  return best[N];
}
