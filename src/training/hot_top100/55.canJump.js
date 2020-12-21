/**
 * @param {number[]} nums
 * @return {boolean}
 * 思路:
 *  动态规划
 *  贪心
 */
// eslint-disable-next-line no-unused-vars
function canJump(nums) {
  let len = nums.length;
  if (len === 0) return false;
  let dp = new Array(len).fill(false);
  dp[0] = true;
  for (let i = 0; i < len; i++) {
    let num = nums[i];
    for (let j = 0; j <= num; j++) {
      if (i + j < len) {
        dp[i + j] = dp[i];
      }
    }
  }
  return dp[len - 1];
}
// eslint-disable-next-line no-unused-vars
function canJump1(nums) {
  // 换一种思路，计算出该路线能到的最远距离，判断最远的距离是否超过了该路径或者刚好到达终点
  // 每一次都计算当前位置以及以前能走到的最远距离（贪心）
  let maxDistance = 0;
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    // 如果当前位置值为0，且当前能到达的最远距离还小于等于这个位置，那么它已经走不到后面了，直接退出循环就好了
    if (nums[i] === 0 && maxDistance <= i) break;
    if (i + nums[i] > maxDistance) maxDistance = i + nums[i];
  }
  return maxDistance >= len - 1;
}
