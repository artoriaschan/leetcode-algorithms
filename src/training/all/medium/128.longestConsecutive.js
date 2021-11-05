// https://leetcode-cn.com/problems/longest-consecutive-sequence/
/**
 * @param {number[]} nums
 * @return {number}
 */
function longestConsecutive(nums) {
  let numset = new Set();
  for (const num of nums) {
    numset.add(num);
  }
  let longestStreak = 0;
  for (const num of numset) {
    if (!numset.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      while (numset.has(currentNum + 1)) {
        currentNum += 1;
        currentStreak += 1;
      }

      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }

  return longestStreak;
}
