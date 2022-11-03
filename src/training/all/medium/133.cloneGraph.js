/**
 * https://leetcode.cn/problems/clone-graph/
 */

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

const visited = new WeakMap();
/**
 * @param {Node} node
 * @return {Node}
 */
function cloneGraph(node) {
  if (!node) {
    return node;
  }
  // 如果该节点已经被访问过了，则直接从哈希表中取出对应的克隆节点返回
  if (visited.has(node)) {
    return visited.get(node);
  }
  // 克隆节点，注意到为了深拷贝我们不会克隆它的邻居的列表
  const cloneNode = new Node(node.val);
  // 哈希表存储
  visited.set(node, cloneNode);

  // 遍历该节点的邻居并更新克隆节点的邻居列表
  for (const neighbor of node.neighbors) {
    cloneNode.neighbors.push(cloneGraph(neighbor));
  }

  return cloneNode;
}
