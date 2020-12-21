/**
 * @param {number[]} height
 * @return {number}
 */
function trap(height) {
  if (height === null || height.length === 0) {
    return 0;
  }
  const len = height.length;
  const leftMax = new Array(len).fill(0);
  const rightMax = new Array(len).fill(0);
  let ans = 0;
  // 从左向右依次统计最高
  leftMax[0] = height[0];
  for (let i = 1; i < len; i++) {
    leftMax[i] = Math.max(height[i], leftMax[i - 1]);
  }
  // 从右向左依次统计最高
  rightMax[len - 1] = height[len - 1];
  for (let i = len - 2; i >= 0; i--) {
    rightMax[i] = Math.max(height[i], rightMax[i + 1]);
  }
  // 取两者统计中的最小值累加, 注意减去原有高度
  for (let i = 0; i < len; i++) {
    ans += Math.min(leftMax[i], rightMax[i]) - height[i];
  }
  return ans;
}
