/* eslint-disable no-unused-vars */
/**
 * @param {number} n
 * @return {number}
 *  思路:
 *    1. fibonacci
 *    2. 优化: fibonacci的递归中存在大量的重复计算, 可以通过数组缓存结果
 */
function climbStairs(n) {
  function fibonacci(num) {
    if (num === 0) return 1;
    if (num === 1) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
  return fibonacci(n);
}
function climbStairsOptimization(n) {
  let cache = [];
  cache[0] = 1;
  cache[1] = 1;
  function fibonacci(num) {
    if (!cache[num]) {
      let res = fibonacci(num - 1) + fibonacci(num - 2);
      cache[num] = res;
      return res;
    }
    return cache[num];
  }
  return fibonacci(n);
}
