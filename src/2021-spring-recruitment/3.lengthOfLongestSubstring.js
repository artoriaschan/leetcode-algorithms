/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  let a = [];
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    const index = a.indexOf(s[i]);
    if (index > -1) a = a.slice(index + 1);
    a.push(s[i]);
    if (max < a.length) max = a.length;
  }
  return max;
}
