/**
 * @param {number[]} heights
 * @return {number}
 * 思路:
 *  栈:
 *    维护一个单调递增栈。
 *      当数组当前元素不小于栈顶元素对应的元素时，将当前元素的坐标放入栈中
 *      当数组当前元素小于栈顶元素对应的元素时，弹出栈顶直到栈顶对应的元素小于当前元素，计算并更新最大面积
 *      当遍历完数组的元素时，结束算法
 */
// eslint-disable-next-line no-unused-vars
function largestRectangleArea(heights) {
  let ans = 0;
  let stack = [];
  heights.unshift(0);
  heights.push(0);
  for (let i = 0; i < heights.length; ++i) {
    while (stack.length && heights[stack[stack.length - 1]] > heights[i]) {
      const currentHeight = stack.pop();
      const right = i;
      const left = stack[stack.length - 1] + 1;
      ans = Math.max(ans, (right - left) * heights[currentHeight]);
    }
    stack.push(i);
  }
  return ans;
}
