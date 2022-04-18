// https://leetcode-cn.com/problems/binary-tree-upside-down/
function upsideDownBinaryTree(root) {
  // 题目数据保证每个右节点都有一个同级节点（即共享同一父节点的左节点）且不存在子节点
  if (!root) return root;
  const queue = [];
  queue.push(root);
  let lastRoot = null;
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      if (i === 0) {
        node.right = lastRoot;
        lastRoot = node;
        if (len === 1) lastRoot.left = null;
      } else {
        lastRoot.left = node;
        node.left = null;
        node.right = null;
      }
    }
  }
  return lastRoot;
}
