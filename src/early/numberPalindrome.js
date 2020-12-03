/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let strNum = new String(x);
  let strNumArr = strNum.split("");
  strNumArr.reverse();
  if (parseInt(strNumArr.join("")) === x) {
    return true;
  }
  return false;
};

console.log(isPalindrome(-121));
