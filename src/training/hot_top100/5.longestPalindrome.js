/**
 * @param {string} s
 * @return {string}
 * 思路:
 *  中心扩散:
 *    1. 从当前元素开始往左右扩散, 先往左扩散直到左边元素与当前元素不同为止,
 *    2. 再往右扩散, 直到右边元素与当前元素不同为止,
 *    3. 然后在左右两边扩散, 直到左右两边元素不同为止
 *    4. 统计出当前元素对应的最大回文字符串长度与全局比较进行替换.
 *  动态规划:
 *    中心扩散存在重复计算, 将计算结果缓存
 *    状态定义: dp[i][j], 表示字符串从 i 到 j 这段是否为回文。
 *    状态转移方程: dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j]
 *    basic case: dp[i][j] = true; when i === j
 *  Manacher
 */
// eslint-disable-next-line no-unused-vars
function longestPalindrome(s) {
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
    while (left >= 0 && s[left] === s[i]) {
      len++;
      left--;
    }
    while (right < strLen && s[right] === s[i]) {
      len++;
      right++;
    }
    while (left >= 0 && right < strLen && s[right] === s[left]) {
      len += 2;
      left--;
      right++;
    }
    if (len > maxLen) {
      maxLen = len;
      maxStart = left;
    }
    len = 1;
  }
  return s.substring(maxStart + 1, maxStart + maxLen + 1);
}
// eslint-disable-next-line no-unused-vars
function longestPalindrome1(s) {
  if (s == null || s.length < 2) {
    return s;
  }
  let strLen = s.length;
  let maxStart = 0; // 最长回文串的起点
  let maxEnd = 0; // 最长回文串的终点
  let maxLen = 1; // 最长回文串的长度

  let dp = Array.from(new Array(strLen), () => new Array(strLen).fill(false));

  for (let i = 1; i < strLen; i++) {
    for (let j = 0; j < i; j++) {
      if (s[i] === s[j] && (i - j <= 2 || dp[j + 1][i - 1])) {
        dp[j][i] = true;
        if (i - j + 1 > maxLen) {
          maxLen = i - j + 1;
          maxStart = j;
          maxEnd = i;
        }
      }
    }
  }
  return s.substring(maxStart, maxEnd + 1);
}
// eslint-disable-next-line no-unused-vars
function longestPalindromeByManacher(s) {
  function isPalindrome(s) {
    return (
      s ===
      s
        .split("")
        .reverse()
        .join("")
    );
  }
  function createT(s) {
    let T = ["$"];
    for (let i = 0; i < s.length; i++) {
      T.push("#");
      T.push(s[i]);
    }
    T.push("#");
    T.push("$");
    return T;
  }
  function Manacher(T) {
    let Len = [];
    let mx = 0;
    let po = 0;
    let result = 0;
    for (let i = 1; i < T.length - 1; i++) {
      if (i >= mx) {
        Len[i] = 1;
      } else {
        /** i < mx */
        Len[i] = Math.min(mx - i, Len[2 * po - i]); // ?
      }
      while (T[i - Len[i]] === T[i + Len[i]]) {
        Len[i]++;
      }
      if (Len[i] + i > mx) {
        mx = Len[i] + i;
        po = i;
      }
      result = Math.max(result, Len[i]);
    }
    return Len;
  }
  if (!s || isPalindrome(s)) return s;
  // Manacher算法
  let T = createT(s);
  let Len = Manacher(T);
  let max = 0;
  let middle = 0;
  for (let i = 1; i < T.length - 1; i++) {
    if (Len[i] > max) {
      middle = i;
      max = Len[i];
    }
  }
  max--;
  let start = middle - max;
  let end = middle + max;
  let result = "";
  for (let i = start; i < end; i++) {
    if (T[i] !== "#" && T[i] !== "$") {
      result += T[i];
    }
  }
  return result;
}
