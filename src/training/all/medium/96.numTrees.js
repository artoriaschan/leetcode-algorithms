/*
 * @Author: beiluo1@xiaohongshu.com
 * @Date: 2021-09-29 14:01:16
 * @LastEditTime: 2021-09-29 14:44:36
 * @LastEditors: beiluo1@xiaohongshu.com
 * @Description: https://leetcode-cn.com/problems/unique-binary-search-trees/
 */
/**
 * @param {number} n
 * @return {number}
 */
function numTrees(n) {
  const G = new Array(n + 1).fill(0);
  G[0] = 1;
  G[1] = 1;

  for (let i = 2; i <= n; ++i) {
    for (let j = 1; j <= i; ++j) {
      G[i] += G[j - 1] * G[i - j];
    }
  }
  return G[n];
}
