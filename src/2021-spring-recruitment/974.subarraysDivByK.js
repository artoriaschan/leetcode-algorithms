/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
// 哈希表 + 前缀和
function subarraysDivByK(A, K) {
  const map = new Map();
  map.set(0, 1);
  let sum = 0;
  let ans = 0;
  for (let item of A) {
    sum += item;
    // 当被除数为负数时取模结果为负数，需要纠正
    const mod = ((sum % K) + K) % K;
    const same = map.has(mod) ? map.get(mod) : 0;
    ans += same;
    map.set(mod, same + 1);
  }
  return ans;
}
