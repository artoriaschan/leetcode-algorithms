/**
 * @param {number[]} nums
 * @return {number[]}
 */
// eslint-disable-next-line no-unused-vars
function singleNumbers(nums) {
  let len = nums.length;
  let ans = [];
  for (let i = 0; i < len; i++) {
    let index = ans.indexOf(nums[i]);
    if (index > -1) ans.splice(index, 1);
    else ans.push(nums[i]);
  }
  return ans;
}
