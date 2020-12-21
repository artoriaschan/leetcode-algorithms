/**
 * @param {string} s
 * @return {number}
 */
// eslint-disable-next-line no-unused-vars
function lengthOfLongestSubstring(s) {
  let len = 0; // 这个是长度
  // eslint-disable-next-line no-unused-vars
  let longestSubstring = ""; // 这个最长子串
  let curSub = "";
  for (let i = 0; i < s.length; i++) {
    if (!curSub.includes(s[i])) {
      curSub += s[i];
      if (curSub.length > len) {
        longestSubstring = curSub;
        len = curSub.length;
      }
    } else {
      curSub += s[i];
      let index = curSub.indexOf(s[i]);
      curSub = curSub.slice(index + 1);
    }
  }
  return len;
}
