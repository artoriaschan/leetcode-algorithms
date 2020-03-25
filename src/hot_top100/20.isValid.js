/**
 * @param {string} s
 * @return {boolean}
 * 思路:
 *  栈的典型应用
 */
// eslint-disable-next-line no-unused-vars
function isValid(s) {
  const stack = [];
  const sArr = s.split("");
  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] === "(" || sArr[i] === "[" || sArr[i] === "{") {
      stack.push(sArr[i]);
    } else {
      const left = stack.pop();
      switch (left) {
        case "(":
          if (sArr[i] !== ")") {
            return false;
          }
          break;
        case "[":
          if (sArr[i] !== "]") {
            return false;
          }
          break;
        case "{":
          if (sArr[i] !== "}") {
            return false;
          }
          break;
        default:
          return false;
      }
    }
  }
  if (stack.length) {
    return false;
  }
  return true;
}
