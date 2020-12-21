/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// 动态规划
// dp[i] 表示字符串 s 前 i 个字符组成的字符串 s[0..i-1] 是否能被空格拆分成若干个字典中出现的单词。
function wordBreak(s, wordDict) {
  const len = s.length;
  const wordDictSet = new Set(wordDict);
  const dp = new Array(len + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= len; i++) {
    for (let j = 0; j < i; j++) {
      // dp[i] = dp[j] && check(s[j..i−1])
      if (dp[j] && wordDictSet.has(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[len];
}
