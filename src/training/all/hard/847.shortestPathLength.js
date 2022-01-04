// https://leetcode-cn.com/problems/shortest-path-visiting-all-nodes/
/**
 * @param {number[][]} graph
 * @return {number}
 */
// 广度优先遍历
function shortestPathLength(graph) {
  const n = graph.length;
  const queue = [];
  const seen = new Array(n).fill(0).map(() => new Array(1 << n).fill(false));
  for (let i = 0; i < n; ++i) {
    // 三元组表示一个节点
    // 0: 表示当前节点编号
    // 1: 是一个长度为 n 的二进制数，表示每一个节点是否经过。
    // 2: 表示到当前节点的路径长度
    queue.push([i, 1 << i, 0]);
    seen[i][1 << i] = true;
  }

  let ans = 0;
  while (queue.length) {
    const tuple = queue.shift();
    const u = tuple[0];
    const mask = tuple[1];
    const dist = tuple[2];
    // 如果所有的节点都遍历过,则遍历结束,跳出循环
    if (mask === (1 << n) - 1) {
      ans = dist;
      break;
    }
    // 搜索相邻的节点
    for (const v of graph[u]) {
      // 将 mask 的第 v 位置为 1
      const maskV = mask | (1 << v);
      if (!seen[v][maskV]) {
        queue.push([v, maskV, dist + 1]);
        seen[v][maskV] = true;
      }
    }
  }
  return ans;
}
