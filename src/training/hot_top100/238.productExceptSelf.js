/**
 * @param {number[]} nums
 * @return {number[]}
 * 思路:
 *  左右乘积表: 构建两个数组L和R, 代表i左侧元素乘积和右侧元素乘积, L[0]和R[length - 1]为1, 因为其左侧和右侧没有元素
 */
// eslint-disable-next-line no-unused-vars
function productExceptSelf(nums) {
  const L = [];
  const R = [];
  const ans = [];
  L[0] = 1;
  const len = nums.length;
  for (let i = 1; i < len; i++) {
    L[i] = L[i - 1] * nums[i - 1];
  }
  R[len - 1] = 1;
  for (let i = len - 2; i >= 0; i--) {
    R[i] = R[i + 1] * nums[i + 1];
  }
  for (let i = 0; i < len; i++) {
    ans[i] = L[i] * R[i];
  }
  return ans;
}
