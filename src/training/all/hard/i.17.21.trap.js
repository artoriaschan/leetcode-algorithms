/**
 * @param {number[]} height
 * @return {number}
 */
// 对于下标 i，水能到达的最大高度等于下标 i 两边的最大高度的最小值
// 下标 i 处能接的水的量等于下标 i 处的水能到达的最大高度减去 height[i]
function trap(height) {
  const n = height.length;
  if (n === 0) return 0;

  const leftMax = new Array(n).fill(0);
  leftMax[0] = height[0];
  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }

  const rightMax = new Array(n).fill(0);
  rightMax[n - 1] = height[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  }

  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans += Math.min(leftMax[i], rightMax[i]) - height[i];
  }
  return ans;
}
