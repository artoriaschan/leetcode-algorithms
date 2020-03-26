/**
 * @param {number[]} nums
 * @return {number[][]}
 * 思路:
 *  全排列问题, 回溯法, 递归
 */
// eslint-disable-next-line no-unused-vars
function permute(nums) {
  let len = nums.length;
  let ans = [];
  let tmpPath = [];
  let backtrack = tmpPath => {
    if (tmpPath.length === len) {
      ans.push(tmpPath);
      return;
    }
    for (let i = 0; i < len; i++) {
      if (!tmpPath.includes(nums[i])) {
        tmpPath.push(nums[i]);
        backtrack(tmpPath.slice());
        tmpPath.pop();
      }
    }
  };
  backtrack(tmpPath);
  return ans;
}
