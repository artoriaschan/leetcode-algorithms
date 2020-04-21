/**
 * @param {string} s
 * @return {number}
 * 思路:
 *  栈
 */
// eslint-disable-next-line no-unused-vars
function longestValidParentheses(s) {
  let stack = [];
  let num = 0;
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else if (stack.length === 0) {
      num = i + 1; // 初始化起点
      continue;
    } else {
      stack.pop();
      if (stack.length === 0) {
        max = Math.max(i - num + 1, max);
      } else {
        max = Math.max(i - stack[stack.length - 1], max);
      }
    }
  }
  return max;
}
