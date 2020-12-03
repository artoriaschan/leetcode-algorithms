var isSameTypeParentheses = function(left, right) {
  let parentheses = "{[()]}";
  let index = parentheses.indexOf(left);
  if (index < 0) return false;
  if (right !== parentheses.charAt(5 - index)) {
    return false;
  }
  return true;
};
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let parenthesesStack = [];
  let leftParenthesesReg = /[\(\[\{]{1}/;
  let result = true;
  for (let str of s) {
    if (leftParenthesesReg.test(str)) {
      parenthesesStack.push(str);
    } else {
      let leftParentheses = parenthesesStack.pop();
      if (!isSameTypeParentheses(leftParentheses, str)) {
        result = false;
        break;
      }
    }
  }
  if (parenthesesStack.length > 0) result = false;
  return result;
};

let str = "()";
console.log(isValid(str));
