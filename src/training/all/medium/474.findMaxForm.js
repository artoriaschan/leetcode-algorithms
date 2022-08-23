/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

function getZerosOnes(str) {
  const zerosOnes = new Array(2).fill(0);
  const len = str.length;
  for (let i = 0; i < len; i++) {
    zerosOnes[str[i].charCodeAt() - "0".charCodeAt()]++;
  }
  return zerosOnes;
}

function findMaxForm1(strs, m, n) {
  const l = strs.length;
  const dp = new Array(l + 1).fill(0).map(() => new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0)));
  for (let i = 1; i <= l; i++) {
    const [zeros, ones] = getZerosOnes(strs[i - 1]);
    for (let j = 0; j <= m; j++) {
      for (let k = 0; k <= n; k++) {
        dp[i][j][k] = dp[i - 1][j][k];
        if (j >= zeros && k >= ones) {
          dp[i][j][k] = Math.max(dp[i][j][k], dp[i - 1][j - zeros][k - ones] + 1);
        }
      }
    }
  }
  return dp[l][m][n];
}

// 压缩状态
// dp[i][...][...]只与dp[i - 1][...][...]有关，可以倒序遍历
function findMaxForm2(strs, m, n) {
  const l = strs.length;
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  for (let i = 0; i < l; i++) {
    const [zeros, ones] = getZerosOnes(strs[i]);
    for (let j = m; j >= zeros; j--) {
      for (let k = n; k >= ones; k--) {
        dp[j][k] = Math.max(dp[j][k], dp[j - zeros][k - ones] + 1);
      }
    }
  }
  return dp[m][n];
}
