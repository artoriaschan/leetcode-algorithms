/* eslint-disable no-unused-vars */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 思路:
 *  暴力
 *  哈希表
 *    两遍hash
 *    一遍hash
 */
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement) && map.get(complement) !== i) {
      return [i, map.get(complement)];
    }
  }
  return [];
}
function twoSum1(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement) && map.get(complement) !== i) {
      return [i, map.get(complement)];
    }
    map.set(nums[i], i);
  }
  return [];
}
