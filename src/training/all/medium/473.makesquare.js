/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */

function backtrack(index, matchsticks, edges, len) {
  if (index === matchsticks.length) return true;
  for (let i = 0; i < edges.length; i++) {
    edges[i] += matchsticks[index];
    if (edges[i] <= len && backtrack(index + 1, matchsticks, edges, len)) {
      return true;
    }
    edges[i] -= matchsticks[index];
  }
  return false;
}
// 回溯
function makesquare(matchsticks) {
  const sum = matchsticks.reduce((prev, cur) => prev + cur);
  if (sum % 4 !== 0) return false;
  const edgeLen = Math.floor(sum / 4);
  matchsticks.sort((a, b) => b - a);
  const edges = new Array(4).fill(0);
  return backtrack(0, matchsticks, edges, edgeLen);
}

// 动态规划
function makesquare1(matchsticks) {
  const sum = matchsticks.reduce((prev, cur) => prev + cur);
  if (sum % 4 !== 0) return false;

  const len = Math.floor(sum / 4);
  const n = matchsticks.length;
  // s为二进制，位数与火柴个数相同
  // dp[s] 用于记录哪些火柴被放入，存放当前这个未放满边的长度
  // dp数组存储的只有两种情况：
  //  1、dp[s] = -1，代表此时放火柴无法把前面的放满。
  //  2、dp[s] = 其他值，代表此时前面的边可以被放满，特殊的，当 dp[s] = 0 时代表当前的边放满。
  // 所以最后的判断条件则是最后元素是否为 0。
  const dp = new Array(1 << n).fill(-1);
  dp[0] = 0;
  for (let s = 1; s < 1 << n; s++) {
    for (let k = 0; k < n; k++) {
      if (s & (1 << k === 0)) continue;
      // 去除第k根火柴
      const s1 = s & ~(1 << k);
      if (dp[s1] >= 0 && dp[s1] + matchsticks[k] <= len) {
        dp[s] = (dp[s1] + matchsticks[k]) % len;
        break;
      }
    }
  }
  return dp[(1 << n) - 1] === 0;
}
