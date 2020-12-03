/**
 * @param {number[]} nums
 * @return {number}
 * 你的算法的时间复杂度应为O(n)，并且只能使用常数级别的空间。
 * 按理说不能排序,不能使用hash
 */
var firstMissingPositive = function(nums) {
  if (nums.length === 0) return 1;
  nums.sort((a, b) => {
    return a - b;
  });
  let positiveStartIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      positiveStartIndex = i;
      break;
    }
  }
  nums = nums.splice(positiveStartIndex, nums.length);
  console.log(nums);

  if (nums[0] > 1) return 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] > 1) {
      return nums[i - 1] + 1;
    }
  }
  return nums[nums.length - 1] + 1;
};

let nums = [1, 2, 0];

console.log(firstMissingPositive(nums));
