/* eslint-disable no-unused-vars */
/**
 * @param {number[]} nums
 * @return {number[]}
 * 思路:
 *  排序 + 遍历验证
 *  哈希表(需开辟空间)
 *  原地哈希(不需要开辟空间)
 */
function findDisappearedNumbers(nums) {
  nums.sort((a, b) => a - b);
  const disappareds = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1 && !nums.includes(i + 1)) {
      disappareds.push(i + 1);
    }
  }
  return disappareds;
}
function findDisappearedNumbers1(nums) {
  const length = nums.length;
  const res = [];
  if (!length) return [];
  nums.forEach(num => {
    // 将下标为 abs(num) - 1 的元素变成负数
    const absNum = Math.abs(num);
    if (nums[absNum - 1] > 0) {
      nums[absNum - 1] *= -1;
    }
  });
  // 针对“数组下标”进行遍历
  for (let i = 1; i <= length; ++i) {
    // 如果下标 i-1 的元素是正数，说明整数 i 没出现过（要不然前面循环就变成负数了）
    if (nums[i - 1] > 0) {
      res.push(i);
    }
  }
  return res;
}
