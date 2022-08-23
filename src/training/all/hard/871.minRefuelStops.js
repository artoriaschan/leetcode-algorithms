/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
// 动态规划
function minRefuelStops(target, startFuel, stations) {
  const n = stations.length;
  // 用 dp[i] 表示加油 i 次的最大行驶英里数
  const dp = new Array(n + 1).fill(0);
  // 初始时汽油量是 startFuel 升
  dp[0] = startFuel;
  for (let i = 0; i < n; i++) {
    for (let j = i; j >= 0; j--) {
      // 经过 j 个加油站的最大距离大于下一个加油站距离时，才能更新 dp[j + 1]
      if (dp[j] >= stations[i][0]) {
        dp[j + 1] = Math.max(dp[j + 1], dp[j] + stations[i][1]);
      }
    }
  }
  // 遍历dp，找到到达目的地的最小次数
  for (let i = 0; i <= n; i++) {
    if (dp[i] >= target) {
      return i;
    }
  }
  return -1;
}

function minRefuelStops1(target, startFuel, stations) {
  if (stations.length === 0) return startFuel >= target ? 0 : -1;
  // leetcode 提供优先队列实现：https://github.com/datastructures-js/priority-queue
  // eslint-disable-next-line no-undef
  const queue = new MaxPriorityQueue();

  let sum = startFuel;
  let ans = 0;

  for (let i = 0; i < stations.length; i++) {
    while (sum < stations[i][0]) {
      const ii = queue.dequeue();
      if (ii == null) return -1;
      sum += ii.element;
      ans++;
    }
    queue.enqueue(stations[i][1]);
  }

  while (sum < target) {
    const ii = queue.dequeue();
    if (ii == null) return -1;
    sum += ii.element;
    ans++;
  }
  return ans;
}
