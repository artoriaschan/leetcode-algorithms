/**
 * @param {number} x
 * @return {boolean}
 */
// eslint-disable-next-line no-unused-vars
function isPalindrome(x) {
  let strNum = x.toString();
  let strNumArr = strNum.split("");
  strNumArr.reverse();
  if (strNumArr.join("") === strNum) {
    return true;
  }
  return false;
}
