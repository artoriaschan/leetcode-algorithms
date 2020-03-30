/**
 * @param {number[]} nums
 * @return {number}
 * 思路:
 *  不符合约束条件的思路:
 *    排序
 *    集合: Set
 *  弗洛伊德的乌龟和兔子（循环检测）
 *    因为 nums 中的每个数字都在 1 和 n 之间，所以它必须指向存在的索引。
 */
// eslint-disable-next-line no-unused-vars
function findDuplicate(nums) {
  let tortoise = nums[0];
  let hare = nums[0];
  do {
    tortoise = nums[tortoise];
    hare = nums[nums[hare]];
  } while (tortoise !== hare);

  let ptr1 = nums[0];
  let ptr2 = tortoise;
  while (ptr1 !== ptr2) {
    ptr1 = nums[ptr1];
    ptr2 = nums[ptr2];
  }

  return ptr1;
}
