/**
 * @param {string} S
 * @return {string}
 */
function removeOuterParentheses(S) {
  const stack = [];
  let res = "";
  for (let s of S) {
    if (s === "(") {
      stack.push(s);
      if (stack.length > 1) {
        res += "(";
      }
    } else {
      if (stack.length > 1) {
        res += ")";
      }
      stack.pop();
    }
  }
  return res;
}

const S = "(()())(())(()(()))";
console.log(removeOuterParentheses(S)); // "()()()()(())"
