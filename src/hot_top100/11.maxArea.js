/**
 * @param {number[]} height
 * @return {number}
 * 思路:
 *  暴力法: 找出每对线段组合的最大面积
 *  双指针法:
 *    两线段之间形成的区域总是会受到其中较短那条长度的限制。此外，两线段距离越远，得到的面积就越大。
 */
// eslint-disable-next-line no-unused-vars
function maxArea(height) {
  let len = height.length;
  let first = 0;
  let last = len - 1;
  let max = 0;
  while (first < last) {
    max = Math.max(max, Math.min(height[first], height[last]) * (last - first));
    if (height[first] < height[last]) first++;
    else last--;
  }
  return max;
}
