/**
 * @param {number[]} nums
 * @return {number}
 * 思路:
 *  动态规划
 *  分治法
 */
// 动态规划
// eslint-disable-next-line no-unused-vars
function maxSubArray(nums) {
  let ans = nums[0];
  let sum = 0;
  for (const num of nums) {
    if (sum > 0) {
      sum += num;
    } else {
      sum = num;
    }
    ans = Math.max(ans, sum);
  }
  return ans;
}
// 分治法
// eslint-disable-next-line no-unused-vars
function maxSubArray1(nums) {
  let length = nums.length;
  let crossSum = function(nums, left, right, mid) {
    if (left === right) return nums[left];
    let leftSubsum = -Infinity;
    let currSum = 0;
    for (let i = mid; i > left - 1; --i) {
      currSum += nums[i];
      leftSubsum = Math.max(currSum, leftSubsum);
    }
    let rightSubsum = -Infinity;
    currSum = 0;
    for (let i = mid + 1; i < right + 1; ++i) {
      currSum += nums[i];
      rightSubsum = Math.max(currSum, rightSubsum);
    }
    return leftSubsum + rightSubsum;
  };
  var helper = function(nums, left, right) {
    if (left === right) return nums[left];
    let mid = (left + right) >> 1;
    let leftSum = helper(nums, left, mid);
    let rightSum = helper(nums, mid + 1, right);
    let crossSum1 = crossSum(nums, left, right, mid);

    return Math.max(Math.max(leftSum, rightSum), crossSum1);
  };
  return helper(nums, 0, length - 1);
}
