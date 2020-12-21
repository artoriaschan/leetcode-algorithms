/**
 * @param {string} s
 * @return {number}
 * 思路:
 *  滑动窗口
 */
// eslint-disable-next-line no-unused-vars
function lengthOfLongestSubstringTwoDistinct(s) {
  const n = s.length;
  if (n < 3) return s;
  const map = new Map();
  let left = 0;
  let right = 0;
  let maxLen = 2;
  while (right < n) {
    if (map.size < 3) {
      map.set(s.charAt(right), right++);
    }
    // slidewindow contains 3 characters
    if (map.size === 3) {
      // delete the leftmost character
      let delIdx = Math.min(...map.values());
      map.delete(s.charAt(delIdx));
      // move left pointer of the slidewindow
      left = delIdx + 1;
    }
    maxLen = Math.max(maxLen, right - left);
  }
  return maxLen;
}
