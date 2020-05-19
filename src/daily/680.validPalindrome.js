/**
 * @param {string} s
 * @return {boolean}
 * 思路:
 *  贪心
 */
// eslint-disable-next-line no-unused-vars
function validPalindrome(s) {
  const len = s.length;
  let slow = 0;
  let fast = len - 1;
  while (slow < fast) {
    if (s[slow] !== s[fast]) {
      let flag1 = true;
      let flag2 = true;
      for (let i = slow, j = fast - 1; i < j; i++, j--) {
        let c3 = s[i];
        let c4 = s[j];
        if (c3 !== c4) {
          flag1 = false;
          break;
        }
      }
      for (let i = slow + 1, j = fast; i < j; i++, j--) {
        let c3 = s[i];
        let c4 = s[j];
        if (c3 !== c4) {
          flag2 = false;
          break;
        }
      }
      return flag1 || flag2;
    }
    slow++;
    fast--;
  }
  return true;
}
