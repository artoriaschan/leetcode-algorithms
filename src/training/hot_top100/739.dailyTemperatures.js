/**
 * @param {number[]} T
 * @return {number[]}
 * 思路:
 *  单调递增栈
 */
// eslint-disable-next-line no-unused-vars
function dailyTemperatures(T) {
  let len = T.length;
  let ans = new Array(len).fill(0);
  let stack = [];
  for (let i = 0; i < len; i++) {
    while (stack.length && T[i] > T[stack[stack.length - 1]]) {
      let index = stack.pop();
      ans[index] = i - index;
    }
    stack.push(i);
  }
  return ans;
}
