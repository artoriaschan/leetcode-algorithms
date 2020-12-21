/**
 * @param {number} nodes
 * @param {number[]} parent
 * @param {number[]} value
 * @return {number}
 */
// eslint-disable-next-line no-unused-vars
function deleteTreeNodes(nodes, parent, value) {
  let edges = Array.from(new Array(nodes), () => []);
  for (let i = 0; i < nodes; i++) {
    if (parent[i] !== -1) {
      if (!edges[parent[i]]) edges[parent[i]] = [];
      edges[parent[i]].push(i);
    }
  }
  let nodeCount = new Array(nodes).fill(1);
  dfs(0, edges, value, nodeCount);
  return nodeCount[0];
}
function dfs(u, edges, value, nodeCount) {
  for (let v of edges[u]) {
    dfs(v, edges, value, nodeCount);
    value[u] += value[v];
    nodeCount[u] += nodeCount[v];
  }
  if (value[u] === 0) {
    nodeCount[u] = 0;
  }
}
