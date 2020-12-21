/**
 * @param {number[]} nums
 * @return {number[][]}
 * 双指针
 */
function threeSum(nums, limit = 0) {
  const results = [];
  let length = nums.length;
  // 先进行排序
  nums.sort((a, b) => a - b);
  for (let i = 0; i < length - 2; i++) {
    // 最小的大于0, 则淘汰
    if (nums[i] > limit) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let first = i + 1;
    let last = length - 1;
    while (first < last) {
      let sum = nums[i] + nums[first] + nums[last];
      if (sum === limit) {
        results.push([nums[first], nums[i], nums[last]]);
        while (first < last && nums[first] === nums[first + 1]) first++;
        while (first < last && nums[last] === nums[last - 1]) last--;
        first++;
        last--;
      } else if (sum < limit) {
        first++;
      } else if (sum > limit) {
        last--;
      }
    }
  }
  return results;
}
