/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 * 思路:
 *  记忆性递归
 *  宽度优先搜索
 *  动态规划: 将一个字符串分成两个子串
 *    状态定义: dp[i]: substring(0,i)子串是否能有字典单词组成
 *    状态转移方程: dp[i] = dp[j] && wordDictSet.has(s.substring(j, i))
 *    basic case: dp[0] = true
 */
// eslint-disable-next-line no-unused-vars
function wordBreak(s, wordDict) {
  let len = s.length;
  let memo = new Array(len);
  let workBreakBacktrack = (s, wordDict, start) => {
    if (start === len) {
      return true;
    }
    if (memo[start] != null) {
      return memo[start];
    }
    for (let end = start + 1; end <= len; end++) {
      if (wordDict.has(s.substring(start, end)) && workBreakBacktrack(s, wordDict, end)) {
        return (memo[start] = true);
      }
    }
    return (memo[start] = false);
  };
  return workBreakBacktrack(s, new Set(wordDict), 0);
}
// eslint-disable-next-line no-unused-vars
function wordBreak1(s, wordDict) {
  let wordDictSet = new Set(wordDict);
  let queue = [];
  let visited = new Array(s.length).fill(0);
  queue.push(0);
  while (queue.length) {
    let start = queue.pop();
    if (visited[start] === 0) {
      for (let end = start + 1; end <= s.length; end++) {
        if (wordDictSet.has(s.substring(start, end))) {
          queue.push(end);
          if (end === s.length) {
            return true;
          }
        }
      }
      visited[start] = 1;
    }
  }
  return false;
}
// eslint-disable-next-line no-unused-vars
function wordBreak2(s, wordDict) {
  let wordDictSet = new Set(wordDict);
  let dp = new Array(s.length + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordDictSet.has(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length];
}
