/* eslint-disable no-unused-expressions */
/**
 * @param {number[]} nums
 * @return {number}
 */
function maxProduct(nums) {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      max = Math.max(max, (nums[i] - 1) * (nums[j] - 1));
    }
  }
  return max;
}

function maxProduct1(nums) {
  let a = nums[0];
  let b = nums[1];

  for (let i = 2; i < nums.length; i++) {
    if (a > b) {
      nums[i] > b && (b = nums[i]);
    } else {
      nums[i] > a && (a = nums[i]);
    }
  }

  return (a - 1) * (b - 1);
}
