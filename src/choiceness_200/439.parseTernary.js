/**
 * @param {string} expression
 * @return {string}
 */
// eslint-disable-next-line no-unused-vars
function parseTernary(expression) {
  const len = expression.length;
  const stack = [];
  for (let i = len - 1; i >= 0; --i) {
    if (expression[i] !== "?") {
      stack.push(expression[i]);
    } else {
      exp(expression, i, stack);
      i -= 1;
    }
  }
  return stack[0];
  function exp(expression, index, stack) {
    let expStr = "";
    for (let i = 0; i < 3; ++i) {
      expStr += stack.pop();
    }
    expStr = expression[index - 1] + expression[index] + expStr;
    if (expStr[0] === "T") {
      stack.push(expStr[2]);
    } else {
      stack.push(expStr[4]);
    }
  }
}
