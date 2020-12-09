/**
 * @param {number[]} nums
 * @return {number}
 */
// 哈希
var findRepeatNumber = function(nums) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) return nums[i];
    map.set(nums[i], 1);
  }
  return -1;
};
// 将每个位置的数交换映射到其对应的数组下标下面，
// 当出现新的元素与其对应的下标中的数字相等时，即为重复数字
var findRepeatNumber1 = function(nums) {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    while (nums[i] !== i) {
      if (nums[i] === nums[nums[i]]) {
        return nums[i];
      }
      let temp = nums[i];
      nums[i] = nums[temp];
      nums[temp] = temp;
    }
  }
  return -1;
};
