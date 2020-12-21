/**
 * @param {number[]} height
 * @return {number}
 * 思路:
 *  1. 动态编程:
 *    找到数组中从下标 i 到最左端最高的条形块高度 left_max。
 *    找到数组中从下标 i 到最右端最高的条形块高度 right_max。
 *    扫描数组 height 并更新答案：
 *      累加 min(max_left[i],max_right[i])−height[i] 到 ans 上
 *  2. 双指针
 */
// eslint-disable-next-line no-unused-vars
function trap(height) {
  if (!height || height.length === 0) {
    return 0;
  }
  let length = height.length;
  let leftMax = new Array(length);
  let rightMax = new Array(length);
  let ans = 0;
  leftMax[0] = height[0];
  for (let i = 1; i < length; i++) {
    leftMax[i] = Math.max(height[i], leftMax[i - 1]);
  }
  rightMax[length - 1] = height[length - 1];
  for (let i = length - 2; i >= 0; i--) {
    rightMax[i] = Math.max(height[i], rightMax[i + 1]);
  }
  for (let i = 1; i < length - 1; i++) {
    ans += Math.min(leftMax[i], rightMax[i]) - height[i];
  }
  return ans;
}
// eslint-disable-next-line no-unused-vars
function trap1(height) {
  if (!height || height.length === 0) {
    return 0;
  }
  let length = height.length;
  let left = 0;
  let right = length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let sum = 0;
  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] < leftMax) {
        sum += leftMax - height[left];
      } else {
        leftMax = height[left];
      }
      left++;
    } else {
      if (height[right] < rightMax) {
        sum += rightMax - height[right];
      } else {
        rightMax = height[right];
      }
      right--;
    }
  }
  return sum;
}
