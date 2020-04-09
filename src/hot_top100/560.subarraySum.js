/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 思路:
 *  hash表:
 *    如果累积总和（由 sum[i] 表示加到 i的和）最多两个指数是相同的，那么这些元素之间的元素总和为零。进一步扩展相同的想法，
 *    如果累计总和，在索引 i 和 j 处相差 k，即 sum[i]−sum[j]=k，则位于索引 i 和 j 之间的元素之和是 k。
 */
// eslint-disable-next-line no-unused-vars
function subarraySum(nums, k) {
  let count = 0;
  let sum = 0;
  let map = new Map();
  map.set(0, 1);
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (map.has(sum - k)) count += map.get(sum - k);
    if (map.has(sum)) map.set(sum, map.get(sum) + 1);
    else map.set(sum, 1);
  }
  return count;
}
