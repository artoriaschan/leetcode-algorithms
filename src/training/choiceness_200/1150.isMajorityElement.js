/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
// eslint-disable-next-line no-unused-vars
function isMajorityElement(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) map.set(nums[i], map.get(nums[i]) + 1);
    else map.set(nums[i], 1);
  }
  return map.get(target) > Math.floor(nums.length / 2);
}
