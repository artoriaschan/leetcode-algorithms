/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
function canPartitionKSubsets(nums, k) {
  let sum = nums.reduce((prev, cur) => prev + cur);
  if (sum % k !== 0) return false;
  sum /= k;
  nums.sort((a, b) => a - b);
  if (nums[nums.length - 1] > sum) return false;
  const buckets = new Array(k).fill(sum);
  return helper(nums, nums.length - 1, buckets, k);
}

function helper(nums, index, buckets, k) {
  if (index < 0) return true;
  // 遍历k个桶
  for (let i = 0; i < k; i++) {
    // 如果正好能放下当前的数或者放下当前的数后，还有机会继续放前面的数（剪枝）
    if (buckets[i] === nums[index] || (index > 0 && buckets[i] - nums[index] >= nums[0])) {
      // 放当前的数到桶i里
      buckets[i] -= nums[index];
      // 开始放下一个数
      if (helper(nums, index - 1, buckets, k)) {
        return true;
      }
      // 这个数不该放在桶i中
      // 从桶中拿回当前的数
      buckets[i] += nums[index];
    }
  }
  return false;
}
