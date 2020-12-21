/**
 * @param {character[][]} matrix
 * @return {number}
 * https://leetcode-cn.com/problems/maximal-rectangle/solution/zui-da-ju-xing-by-leetcode/
 * 思路:
 *  动态规划
 */
// eslint-disable-next-line no-unused-vars
function maximalRectangle(matrix) {
  function maxArea(heights) {
    const stack = [];
    let ans = 0;
    heights.unshift(0);
    heights.push(0);
    for (let i = 0; i < heights.length; ++i) {
      while (stack.length && heights[stack[stack.length - 1]] > heights[i]) {
        const currentHeight = stack.pop();
        const right = i - 1;
        const left = stack[stack.length - 1] + 1;
        ans = Math.max(ans, (right - left + 1) * heights[currentHeight]);
      }
      stack.push(i);
    }
    return ans;
  }
  let res = 0;
  if (!matrix.length) return res;
  const dp = [];
  for (let i = 0; i < matrix[0].length; ++i) {
    dp.push(0);
  }
  for (let i = 0; i < matrix.length; ++i) {
    for (let j = 0; j < matrix[0].length; ++j) {
      dp[j] = matrix[i][j] === "1" ? dp[j] + 1 : 0;
    }
    res = Math.max(res, maxArea(dp.slice()));
  }
  return res;
}
