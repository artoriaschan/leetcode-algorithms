/**
 * @param {number[]} nums
 * @return {number}
 */

// F(0) = 0 * nums[0] + 1 * nums[1] + … + (n − 1) * nums[n − 1]
// F(1) = 1 * nums[0] + 2 * nums[1] + … + 0 * nums[n − 1] = F(0) + numSum − n * nums[n − 1]
// F(2) = 2 * nums[0] + 3 * nums[1] + … + 1 * nums[n − 1] = F(1) + numSum − n * nums[n − 2]
function maxRotateFunction(nums) {
  let f = 0;
  let n = nums.length;
  let numSum = nums.reduce((prev, cur) => prev + cur);

  for (let i = 0; i < n; i++) {
    f += i * nums[i];
  }

  let res = f;
  // 迭代
  for (let i = n - 1; i > 0; i--) {
    f += numSum - n * nums[i];
    res = Math.max(res, f);
  }
  return res;
}
