/* eslint-disable no-unused-vars */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 思路:
 *  类似冒泡
 *  双指针, i,j, i指向非零的元素, j指向0元素, 进行交换
 */
function moveZeroes(nums) {
  const len = nums.length;
  let noZero = true;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (nums[j] === 0) {
        noZero = false;
        let temp = nums[j + 1];
        nums[j + 1] = 0;
        nums[j] = temp;
      }
    }
    if (noZero) break;
  }
}
function moveZeroes1(nums) {
  let i = 0;
  let j = 0;
  while (i < nums.length) {
    if (nums[i] !== 0) {
      if (j < i) {
        nums[j] = nums[i];
        nums[i] = 0;
      }
      j++;
    }
    i++;
  }
  return nums;
}
