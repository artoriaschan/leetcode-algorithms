/**
 * @param {string} s
 * @return {boolean}
 * 思路:
 *  筛选 + 判断
 *  双指针
 */
// eslint-disable-next-line no-unused-vars
function isPalindrome(s) {
  if (s === "") return true;
  const lowStr = s.toLowerCase();
  let filterStr = "";
  for (let i = 0; i < lowStr.length; i++) {
    if (lowStr[i].charCodeAt() >= 97 && lowStr[i].charCodeAt() <= 122) {
      filterStr += lowStr[i];
    }
    if (lowStr[i].charCodeAt() >= 48 && lowStr[i].charCodeAt() <= 57) {
      filterStr += lowStr[i];
    }
  }
  if (
    filterStr
      .split("")
      .reverse()
      .join("") === filterStr
  )
    return true;
  return false;
}
// eslint-disable-next-line no-unused-vars
function isPalindrome1(s) {
  if (s === "") return true;
  function isLetterOrDigit(char) {
    const charCode = char.charCodeAt();
    if (charCode >= 97 && charCode <= 122) return true;
    if (charCode >= 48 && charCode <= 57) return true;
    return false;
  }
  const lowStr = s.toLowerCase();
  const len = lowStr.length;
  let left = 0;
  let right = len - 1;
  while (left < right) {
    while (left < right && !isLetterOrDigit(lowStr[left])) ++left;
    while (left < right && !isLetterOrDigit(lowStr[right])) --right;
    if (left < right) {
      if (lowStr[left] !== lowStr[right]) {
        console.log(left, right, s[left], s[right]);
        return false;
      }
      ++left;
      --right;
    }
  }
  return true;
}
