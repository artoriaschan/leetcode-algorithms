/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * https://leetcode-cn.com/problems/count-number-of-nice-subarrays/solution/tong-ji-you-mei-zi-shu-zu-by-leetcode-solution/
 * 思路:
 *   数学:
 *    单独建立一个 odd 数组来记录第 i 个奇数的下标
 *    那么我们可以枚举奇数，假设当前枚举到第 i 个，那么 [odd[i],odd[i+k−1]]这个子数组就恰好包含 k 个奇数。
 *    一定存在其他子数组 [l,r] 满足 [l,r] 包含 [odd[i],odd[i+k−1]] 且 [l,r] 里的奇数个数为 k 个，那么这个需要怎么统计呢？
 *      (odd[i−1],odd[i]) 间的数都为偶数。同理可得 (odd[i+k−1],odd[i+k]) 间的数也都为偶数。
 *      那么我们可以得出满足 l∈(odd[i−1],odd[i]) 且 r∈[odd[i+k−1],odd[i+k]) 条件的子数组 [l,r] 包含 [odd[i],odd[i+k−1]] 且 [l,r] 里的奇数个数为 k 个。
 */
// eslint-disable-next-line no-unused-vars
function numberOfSubarrays(nums, k) {
  let n = nums.length;
  let odd = [];
  let ans = 0;
  let cnt = 0;
  for (let i = 0; i < n; ++i) {
    if (nums[i] & 1) odd[++cnt] = i;
  }
  odd[0] = -1;
  odd[++cnt] = n;
  for (let i = 1; i + k <= cnt; ++i) {
    ans += (odd[i] - odd[i - 1]) * (odd[i + k] - odd[i + k - 1]);
  }
  return ans;
}
