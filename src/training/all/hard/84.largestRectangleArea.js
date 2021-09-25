/*
 * @Author: beiluo1@xiaohongshu.com
 * @Date: 2021-09-25 16:03:53
 * @LastEditTime: 2021-09-25 16:41:48
 * @LastEditors: beiluo1@xiaohongshu.com
 * @Description: https://leetcode-cn.com/problems/largest-rectangle-in-histogram/
 */
/**
 * @param {number[]} heights
 * @return {number}
 */
function largestRectangleArea(heights) {
  const n = heights.length;
  let left = new Array(n).fill(0);
  let right = new Array(n).fill(0);

  let stack = [];
  for (let i = 0; i < n; i++) {
    while (stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
      stack.pop();
    }
    left[i] = stack.length > 0 ? stack[stack.length - 1] : -1;
    stack.push(i);
  }

  stack = [];
  for (let i = n - 1; i >= 0; --i) {
    while (stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
      stack.pop();
    }
    right[i] = stack.length > 0 ? stack[stack.length - 1] : n;
    stack.push(i);
  }

  let ans = 0;
  for (let i = 0; i < n; ++i) {
    ans = Math.max(ans, (right[i] - left[i] - 1) * heights[i]);
  }
  return ans;
}

// 超出时间
function largestRectangleArea1(heights) {
  let ans = 0;
  for (let i = 0; i < heights.length; i++) {
    let min = heights[i];
    for (let j = i; j < heights.length; j++) {
      if (min > heights[j]) min = heights[j];
      ans = Math.max(ans, min * (j - i + 1));
    }
  }
  return ans;
}
