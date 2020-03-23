/* eslint-disable no-unused-vars */
/**
 * @param {number[]} nums
 * @return {number}
 * 思路:
 *  hash
 *  排序
 *  Boyer-Moore 投票算法
 */
function majorityElement(nums) {
  let map = new Map();
  for (let num of nums) {
    if (map.has(num)) map.set(num, map.get(num) + 1);
    else map.set(num, 1);
  }
  // let mostCount = 0;
  // let mostVal = 0;
  // for (let [k, v] of map.entries()) {
  //   if (mostCount < v) {
  //     mostCount = v;
  //     mostVal = k;
  //   }
  // }
  // return mostVal;

  for (let [k, v] of map.entries()) {
    if (v > nums.length >> 1) {
      return k;
    }
  }
}
