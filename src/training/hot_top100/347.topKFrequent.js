/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 思路:
 * 利用桶的解决思路
 *  1. 先用Map将出现的频率统计好
 *  2. 再创建桶，放到数组中，桶在数组中的下标，就是数字出现的频率
 *  3. 遍历这些桶，最先进入数组的K个数，就是最大或者最小
 */
// eslint-disable-next-line no-unused-vars
function topKFrequent(nums, k) {
  let map = new Map();
  for (let num of nums) {
    if (map.has(num)) map.set(num, map.get(num) + 1);
    else map.set(num, 1);
  }
  let bucket = [];
  for (let [k, v] of map.entries()) {
    if (bucket[v] === undefined) {
      let tmp = [];
      tmp.push(k);
      bucket[v] = tmp;
    } else {
      let c = bucket[v];
      c.push(k);
    }
  }
  let ans = [];
  for (let i = bucket.length - 1; i > 0; i--) {
    let t = bucket[i];
    if (t != null) {
      t.forEach(item => {
        if (ans.length === k) {
          return ans;
        }
        ans.push(item);
      });
    }
  }
  return ans;
}
