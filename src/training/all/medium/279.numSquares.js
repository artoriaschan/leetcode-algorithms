// https://leetcode-cn.com/problems/perfect-squares/
/**
 * @param {number} n
 * @return {number}
 */
function numSquares(n) {
  const f = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    let minn = Number.MAX_VALUE;
    for (let j = 1; j * j <= i; j++) {
      minn = Math.min(minn, f[i - j * j]);
    }
    f[i] = minn + 1;
  }
  return f[n];
}
