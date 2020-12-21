/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 * 思路:
 *  动态规划:
 *    状态定义:
 *      dp[i][j]: word1的前 i 个字符到word2前 j 个字符的最小编辑距离
 *    状态转换方程:
 *      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1]); word1[i] === word2[j]
 *      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + 1); word1[i] !== word2[j]
 *    basic case:
 *      初始化第1列第n行的数据
 *      初始化第1行第n列的数据
 */
// eslint-disable-next-line no-unused-vars
function minDistance(word1, word2) {
  if (word1 === word2) {
    return 0;
  }
  // 行
  let n = word1.length;
  // 列
  let m = word2.length;
  if (!n || !m) {
    return n || m;
  }
  let minDist = Array.from(new Array(n), () => new Array(m));
  // 初始化第1列第n行的数据
  for (let i = 0; i < n; ++i) {
    if (word1[i] === word2[0]) {
      minDist[i][0] = i;
    } else if (i === 0) {
      minDist[i][0] = 1;
    } else {
      minDist[i][0] = minDist[i - 1][0] + 1;
    }
  }
  // 初始化第1行第n列的数据
  for (let j = 0; j < m; ++j) {
    if (word1[0] === word2[j]) {
      minDist[0][j] = j;
    } else if (j === 0) {
      minDist[0][j] = 1;
    } else {
      minDist[0][j] = minDist[0][j - 1] + 1;
    }
  }
  for (let i = 1; i < n; ++i) {
    for (let j = 1; j < m; ++j) {
      if (word1[i] === word2[j]) {
        minDist[i][j] = Math.min(minDist[i - 1][j] + 1, minDist[i][j - 1] + 1, minDist[i - 1][j - 1]);
      } else {
        minDist[i][j] = Math.min(minDist[i - 1][j] + 1, minDist[i][j - 1] + 1, minDist[i - 1][j - 1] + 1);
      }
    }
  }
  return minDist[n - 1][m - 1];
}
