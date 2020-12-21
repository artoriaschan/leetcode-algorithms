/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 * 思路:
 *  哈希表 + 逐一统计:
 *    P[i]=A[0]+A[1]+...+A[i], sum(i,j) 就可以写成 P[j]−P[i−1].
 *    判断子数组(i, j)的和sum(i,j)能否被 K 整除就等价于判断 (P[j]−P[i−1]) mod K == 0，
 *    根据 同余定理，只要 P[j] mod K == P[i−1] mod K，就可以保证上面的等式成立。
 */
// eslint-disable-next-line no-unused-vars
function subarraysDivByK(A, K) {
  let map = new Array(K).fill(0); // 初始化map数组，长度K
  map[0] = 1; // 预置边界情况，第0项1。其他项0
  let preSumModK = 0;
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    preSumModK = (preSumModK + A[i]) % K;
    if (preSumModK < 0) preSumModK += K;
    count += map[preSumModK]; // 索引是mod，值是出现次数
    map[preSumModK]++; // 出现次数+1
  }
  return count;
}
// eslint-disable-next-line no-unused-vars
function subarraysDivByK1(A, K) {
  const map = new Map();
  map.set(0, 1);
  let sum = 0;
  let ans = 0;
  for (let elem of A) {
    sum += elem;
    let modules = ((sum % K) + K) % K;
    let same = map.has(modules) ? map.get(modules) : 0;
    ans += same;
    map.set(modules, same + 1);
  }
  return ans;
}
