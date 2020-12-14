/**
 * @param {string} s
 * @return {string}
 */
// 动态规划
function longestPalindrome(s) {
  const len = s.length;
  const dp = Array.from(new Array(len), () => new Array(len).fill(false));
  let ans = "";
  // l 为下标间隔
  for (let l = 0; l < len; l++) {
    // i 为开始下标
    for (let i = 0; i + l < len; i++) {
      // j 为结束下标
      let j = i + l;
      if (l === 0) {
        dp[i][j] = true;
      } else if (l === 1) {
        dp[i][j] = s.charAt(i) === s.charAt(j);
      } else {
        dp[i][j] = s.charAt(i) === s.charAt(j) && dp[i + 1][j - 1];
      }
      if (dp[i][j] && l + 1 > ans.length) {
        ans = s.substring(i, j + 1);
      }
    }
  }
  return ans;
}

// 中心扩展算法
function longestPalindrome1(s) {
  if (s == null || s.length === 0) {
    return "";
  }
  let strLen = s.length;
  let left = 0;
  let right = 0;
  let len = 1;
  let maxStart = 0;
  let maxLen = 0;

  for (let i = 0; i < strLen; i++) {
    left = i - 1;
    right = i + 1;
    // 往左扩展
    while (left >= 0 && s[left] === s[i]) {
      len++;
      left--;
    }
    // 往右扩展
    while (right < strLen && s[right] === s[i]) {
      len++;
      right++;
    }
    // 中心扩展
    while (left >= 0 && right < strLen && s[right] === s[left]) {
      len += 2;
      left--;
      right++;
    }
    // 比较长度，保留较长的长度和起始坐标
    if (len > maxLen) {
      maxLen = len;
      maxStart = left + 1;
    }
    len = 1;
  }
  return s.substring(maxStart, maxStart + maxLen);
}
