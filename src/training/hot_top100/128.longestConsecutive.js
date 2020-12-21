/**
 * @param {number[]} nums
 * @return {number}
 * 要求算法的时间复杂度为 O(n)。
 * 思路:
 *  哈希表和线性空间的构造
 */
// eslint-disable-next-line no-unused-vars
function longestConsecutive(nums) {
  let numSet = new Set();
  for (let num of nums) {
    numSet.add(num);
  }

  let longestStreak = 0;

  for (let num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;
      while (numSet.has(currentNum + 1)) {
        currentNum += 1;
        currentStreak += 1;
      }
      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }

  return longestStreak;
}
