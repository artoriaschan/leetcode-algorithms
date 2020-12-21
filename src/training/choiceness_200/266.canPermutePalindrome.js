/**
 * @param {string} s
 * @return {boolean}
 */
// eslint-disable-next-line no-unused-vars
function canPermutePalindrome(s) {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) map.set(s[i], map.get(s[i]) + 1);
    else map.set(s[i], 1);
  }
  let singleNum = 0;
  // eslint-disable-next-line no-unused-vars
  for (let [k, v] of map.entries()) {
    if (v % 2 !== 0) {
      singleNum++;
    }
  }
  return singleNum <= 1;
}
