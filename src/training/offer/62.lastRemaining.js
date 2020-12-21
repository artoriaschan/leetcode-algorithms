/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
// 约瑟夫环问题
// 状态定义：F(n) 表示还有 n 个人时最后剩下的数字索引号
/**
 * F(1) = 0
 * F(2) = (F(1) + m) % 2
 * F(3) = (F(2) + m) % 3
 */
// 状态转移方程：F(n)=(F(n−1)+m)
function lastRemaining(n, m) {
  let f = 0;
  for (let i = 2; i <= n; i++) {
    f = (m + f) % i;
  }
  return f;
}
