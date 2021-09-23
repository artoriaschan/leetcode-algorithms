/*
 * @Author: beiluo1@xiaohongshu.com
 * @Date: 2021-09-23 11:59:34
 * @LastEditTime: 2021-09-23 14:32:54
 * @LastEditors: beiluo1@xiaohongshu.com
 * @Description: https://leetcode-cn.com/problems/edit-distance/
 */
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
function minDistance(word1, word2) {
  const len1 = word1.length;
  const len2 = word2.length;

  // 有一个字符串为空串
  if (len1 * len2 === 0) {
    return len1 + len2;
  }
  // 初始化dp数组
  const dp = Array.from(new Array(len1 + 1), () => new Array(len2 + 1).fill(0));

  // 边界状态初始化
  for (let i = 0; i < len1 + 1; i++) {
    dp[i][0] = i;
  }
  for (let j = 0; j < len2 + 1; j++) {
    dp[0][j] = j;
  }
  // 计算所有 DP 值
  for (let i = 1; i < len1 + 1; i++) {
    for (let j = 1; j < len2 + 1; j++) {
      const left = dp[i - 1][j] + 1;
      const down = dp[i][j - 1] + 1;
      let leftDown = dp[i - 1][j - 1];
      if (word1.charAt(i - 1) !== word2.charAt(j - 1)) {
        leftDown += 1;
      }
      dp[i][j] = Math.min(left, Math.min(down, leftDown));
    }
  }
  return dp[len1][len2];
}
