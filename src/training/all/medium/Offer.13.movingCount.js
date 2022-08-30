// https://leetcode-cn.com/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof/submissions/
/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
function get(x) {
  let res = 0;
  while (x !== 0) {
    res += x % 10;
    x = Math.floor(x / 10);
  }
  console.log(x, res);
  return res;
}
function movingCount(m, n, k) {
  if (k === 0) {
    return 1;
  }
  const queue = [];
  // 向右和向下的方向数组
  const dx = [0, 1];
  const dy = [1, 0];
  const vis = Array.from(new Array(m), () => new Array(n).fill(false));
  queue.push([0, 0]);
  vis[0][0] = true;
  let ans = 1;
  while (queue.length > 0) {
    const cell = queue.pop();
    let x = cell[0];
    let y = cell[1];
    for (let i = 0; i < 2; ++i) {
      let tx = dx[i] + x;
      let ty = dy[i] + y;
      // 忽略坐标的判断条件
      // 超出边界的坐标
      // 已经访问过的坐标
      // 各位相加超过k的坐标
      if (tx < 0 || tx >= m || ty < 0 || ty >= n || vis[tx][ty] || get(tx) + get(ty) > k) {
        continue;
      }
      queue.push([tx, ty]);
      vis[tx][ty] = true;
      ans++;
    }
  }
  return ans;
}
