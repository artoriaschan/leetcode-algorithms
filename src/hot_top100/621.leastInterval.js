/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 * 思路:
 *  排序: 根据每种任务的数量进行排序, 每轮执行 n+1 种任务, 若任务种类不大于n+1, 只能空闲
 *  优先队列: 在选择每一轮中的任务时，我们也可以用优先队列（堆）来代替排序。在一开始，我们把所有的任务加入到优先队列中。
 *    在每一轮，我们从优先队列中选择最多 n + 1 个任务，把它们的数量减去 1，再放回堆中（如果数量不为 0），直到堆为空。
 *  桶思想: 我们设计桶的大小为 n+1，则相同的任务恰好不能放入同一个桶，最密也只能放入相邻的桶。
 *    对于重复的任务，我们只能将每个都放入不同的桶中，因此桶的个数就是重复次数最多的任务的个数。
 *    一个桶不管是否放满，其占用的时间均为 n+1，这是因为后面桶里的任务需要等待冷却时间。最后一个桶是个特例，由于其后没有其他任务需等待，所以占用的时间为桶中的任务个数。
 */
function leastInterval(tasks, n) {
  let map = new Array(26).fill(0);
  for (let task of tasks) map[String.prototype.charCodeAt.call(task) - String.prototype.charCodeAt.call("A")]++;
  map.sort((a, b) => a - b);
  let time = 0;
  while (map[25] > 0) {
    let i = 0;
    while (i <= n) {
      if (map[25] === 0) break;
      if (i < 26 && map[25 - i] > 0) map[25 - i]--;
      time++;
      i++;
    }
    map.sort((a, b) => a - b);
  }
  return time;
}
function leastIntervalBucket(tasks, n) {
  let map = new Array(26).fill(0);
  for (let task of tasks) map[String.prototype.charCodeAt.call(task) - String.prototype.charCodeAt.call("A")]++;
  map.sort((a, b) => a - b);
  let ans = 0;
  let nBucket = map[25];
  let lastBucketSize = map.reduce((a, b) => {
    if (b === nBucket) return a + 1;
    return a;
  }, 0);
  ans = (nBucket - 1) * (n + 1) + lastBucketSize;
  return Math.max(ans, tasks.length);
}
// eslint-disable-next-line no-unused-expressions
!(function() {
  const tasks = ["A", "A", "A", "B", "B", "B"];
  const n = 2;
  let time1 = leastInterval(tasks, n);
  let time2 = leastIntervalBucket(tasks, n);
  console.log(time1);
  console.log(time2);
})();
