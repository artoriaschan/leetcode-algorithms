/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 单调队列
var maxSlidingWindow = function(nums, k) {
  if (nums.length === 0 || k === 0) {
    return [];
  }
  let queue = [];
  let res = [];
  for (let right = 0, left = 1 - k; right < nums.length; left++, right++) {
    if (left > 0 && queue[0] === nums[left - 1]) {
      queue.shift();
    }
    while (queue.length !== 0 && queue[queue.length - 1] < nums[right]) {
      queue.pop();
    }
    queue.push(nums[right]);
    if (left >= 0) {
      res[left] = queue[0];
    }
  }
  return res;
};
