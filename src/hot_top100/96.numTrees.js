/**
 * @param {number} n
 * @return {number}
 * 思路:
 *  动态规划
 *    状态:
 *      G(n): 长度为n的序列的不同二叉搜索树个数。
 *        不同的二叉搜索树的总数 G(n)，是对遍历所有 i (1 <= i <= n) 的 F(i,n)之和。
 *      F(i, n): 以i为根的不同二叉搜索树个数(1 <= i <= n)。
 *        对于根 i 的不同二叉搜索树数量 F(i,n)，是左右子树个数的'笛卡尔积'
 *    状态转换方程:
 *      G(n)=∑F(i,n)
 *      F(i,n)=G(i−1)⋅G(n−i)
 *      G(n)=∑G(i−1)⋅G(n−i)
 *    base case:
 *      G(0) = 1;
 *      G(1) = 1;
 */
// eslint-disable-next-line no-unused-vars
function numTrees(n) {
  let G = new Array(n + 1).fill(0);
  G[0] = 1;
  G[1] = 1;
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      G[i] += G[j - 1] * G[i - j];
    }
  }
  return G[n];
}
