/* eslint-disable no-unused-vars */
/**
 * @param {string} s
 * @return {number}
 * 思路:
 *  DP
 *  中心拓展:
 *    在长度为 N 的字符串中，可能的回文串中心位置有 2N-1 个：字母，或两个字母中间。
 */
function countSubstrings(s) {
  let dp = Array.from(new Array(s.length), () => new Array(s.length).fill(false));
  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j >= 0; j--) {
      dp[j][i] = s[i] === s[j] && (i - j <= 1 || dp[j + 1][i - 1]);
      if (dp[j][i]) ans++;
    }
  }
  return ans;
}
function countSubstrings1(s) {
  // 中心拓展
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < 2; j++) {
      let left = i;
      let right = i + j;
      while (s[left] && s[left] === s[right]) {
        left--;
        right++;
        res++;
      }
    }
  }
  return res;
}
