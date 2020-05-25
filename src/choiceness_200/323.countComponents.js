/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
// eslint-disable-next-line no-unused-vars
function countComponents(n, edges) {
  let disjoint = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    disjoint[i] = i;
  }
  // 指定父元素
  function union(x, y) {
    x = find(x);
    y = find(y);
    if (x === y) {
      return;
    }
    disjoint[x] = y;
  }
  // 寻找父元素
  function find(x) {
    if (disjoint[x] === x) {
      return x;
    }
    disjoint[x] = find(disjoint[x]);
    return disjoint[x];
  }
  if (n < 2) return n;
  let len = edges.length;
  for (let i = 0; i < len; i++) {
    // 起始点
    let x = edges[i][0];
    // 结束点
    let y = edges[i][1];
    let parentX = find(x);
    let parentY = find(y);
    if (parentX !== parentY) {
      union(parentX, parentY);
    }
  }
  let ans = [];
  for (let i = 0; i < n; i++) {
    let parent = find(i);
    if (!ans.includes(parent)) {
      ans.push(parent);
    }
  }
  return ans.length;
}
