/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  nums = nums.sort((a, b) => {
    return a - b;
  });
  if (nums.length < 4) return [];
  let length = nums.length;
  let arr = [];
  for (let i = 0; i < length; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }
    for (let j = i + 1; j < length; j++) {
      if (j > i + 1 && nums[j] == nums[j - 1]) {
        continue;
      }
      let l = j + 1,
        k = length - 1;
      while (l < k) {
        var a = nums[i],
          b = nums[j],
          c = nums[l],
          d = nums[k];
        var sum = a + b + c + d;
        if (sum === target) {
          arr.push([a, b, c, d]);
          while (l < k && nums[l] == nums[l + 1]) l++; // 第三个数去重
          while (l < k && nums[k] == nums[k - 1]) k--; // 第四个数去重
          l++;
          k--;
        } else if (sum < target) {
          l++;
        } else if (sum > target) {
          k--;
        }
      }
    }
  }
  return arr;
};

let nums = [-3, -2, -1, 0, 0, 1, 2, 3];
let target = 0;
console.log(fourSum(nums, target));
