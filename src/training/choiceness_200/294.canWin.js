/**
 * @param {string} s
 * @return {boolean}
 * 思路:
 *  递归
 */
// eslint-disable-next-line no-unused-vars
function canWin(s) {
  let len = s.length;
  for (let i = 0; i < len; ++i) {
    if (s[i] === "+" && s[i + 1] === "+") {
      if (!canWin(`${s.substring(0, i)}--${s.substring(i + 2)}`)) {
        return true;
      }
    }
  }
  return false;
}
