/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 回溯算法
function permute(nums) {
  const res = [];
  backtrack(nums, [], res, nums.length);
  return res;
}
function backtrack(nums, tmp, res, limit) {
  if (tmp.length === limit) {
    res.push(tmp);
  }
  for (let i = 0; i < nums.length; i++) {
    if (!tmp.includes(nums[i])) {
      tmp.push(nums[i]);
      backtrack(nums, tmp.slice(), res, limit);
      tmp.pop();
    }
  }
}
