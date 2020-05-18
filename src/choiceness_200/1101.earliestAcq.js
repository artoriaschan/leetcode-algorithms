/**
 * @param {number[][]} logs
 * @param {number} N
 * @return {number}
 * 思路:
 *  排序+并查集
 */
// eslint-disable-next-line no-unused-vars
function earliestAcq(logs, N) {
  let fa = new Array(N).fill(0);
  let count = 1;
  for (let i = 0; i < N; i++) {
    fa[i] = i;
  }
  logs.sort((a, b) => a[0] - b[0]);
  for (let log of logs) {
    const [timestamp, idA, idB] = log;
    count = union(fa, idA, idB, count);
    if (count === N) return timestamp;
  }
  return -1;
}
// 搜索
function find(fa, x) {
  while (fa[x] !== x) {
    x = fa[x];
  }
  return fa[x];
}
// 路径压缩
function union(fa, x, y, count) {
  let xFather = find(fa, x);
  let yFather = find(fa, y);
  if (xFather !== yFather) {
    fa[yFather] = xFather;
    count++;
  }
  return count;
}
