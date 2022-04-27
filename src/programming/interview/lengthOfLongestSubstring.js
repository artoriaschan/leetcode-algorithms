/**
 * 滴滴一面
 * 请从字符串中找出一个最长的不包含重复字符的子字符串，计算该最长子字符串的长度。
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  let max = 0;
  let res = "";
  for (let i = 0; i < s.length; i++) {
    const index = res.indexOf(s[i]);
    if (index < 0) {
      res += s[i];
      max = Math.max(max, res.length);
    } else {
      res = res.slice(index + 1);
      res += s[i];
      max = Math.max(max, res.length);
    }
  }
  return max;
}

// const s = "pwwkew";
const s = "nfpdmpi";
console.log(lengthOfLongestSubstring(s));
