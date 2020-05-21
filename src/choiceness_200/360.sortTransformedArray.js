/**
 * @param {number[]} nums
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
// eslint-disable-next-line no-unused-vars
function sortTransformedArray(nums, a, b, c) {
  let ans = [];
  for (let num of nums) {
    let res = a * num * num + b * num + c;
    ans.push(res);
  }
  ans.sort((a, b) => a - b);
  return ans;
}
// eslint-disable-next-line no-unused-vars
function sortTransformedArray1(nums, a, b, c) {
  let ans = [];
  if (a === 0) {
    if (b > 0) {
      for (let num of nums) {
        let res = b * num + c;
        ans.push(res);
      }
    } else if (b < 0) {
      for (let num of nums) {
        let res = b * num + c;
        ans.unshift(res);
      }
    } else {
      // eslint-disable-next-line no-unused-vars
      for (let num of nums) {
        ans.push(c);
      }
    }
  } else if (a > 0) {
    let [i, j] = [0, nums.length - 1];
    while (i <= j) {
      let res1 = a * nums[i] ** 2 + b * nums[i] + c;
      let res2 = a * nums[j] ** 2 + b * nums[j] + c;
      if (res1 > res2) {
        ans.unshift(res1);
        ++i;
      } else {
        ans.unshift(res2);
        --j;
      }
    }
  } else {
    let [i, j] = [0, nums.length - 1];
    while (i <= j) {
      let res1 = a * nums[i] ** 2 + b * nums[i] + c;
      let res2 = a * nums[j] ** 2 + b * nums[j] + c;
      if (res1 < res2) {
        ans.push(res1);
        ++i;
      } else {
        ans.push(res2);
        --j;
      }
    }
  }
  return ans;
}
