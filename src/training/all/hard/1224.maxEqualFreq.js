/**
 * @param {number[]} nums
 * @return {number}
 */
function maxEqualFreq(nums) {
  const freq = new Map();
  const count = new Map();
  let res = 0;
  let maxFreq = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!count.has(nums[i])) {
      count.set(nums[i], 0);
    }
    // 之前出现的次数减一
    if (count.get(nums[i]) > 0) {
      freq.set(count.get(nums[i]), freq.get(count.get(nums[i])) - 1);
    }
    // 增加出现次数
    count.set(nums[i], count.get(nums[i]) + 1);
    // 获取最大出现次数
    maxFreq = Math.max(maxFreq, count.get(nums[i]));

    if (!freq.has(count.get(nums[i]))) {
      freq.set(count.get(nums[i]), 0);
    }
    // 更新出现次数统计
    freq.set(count.get(nums[i]), freq.get(count.get(nums[i])) + 1);
    const ok =
      maxFreq === 1 || // 最大出现次数 maxFreq=1
      (freq.get(maxFreq) * maxFreq + freq.get(maxFreq - 1) * (maxFreq - 1) === i + 1 && freq.get(maxFreq) === 1) || // 所有数的出现次数都是 maxFreq 或 maxFreq − 1，并且最大出现次数的数只有一个
      (freq.get(maxFreq) * maxFreq + 1 === i + 1 && freq.get(1) === 1); // 除开一个数，其他所有数的出现次数都是 maxFreq，并且该数的出现次数为 1
    if (ok) {
      res = Math.max(res, i + 1);
    }
  }
  return res;
}
