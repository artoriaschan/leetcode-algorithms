/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
function serialize(root) {
  if (root == null) {
    // 遍历到 null 节点
    return "None";
  }
  const left = serialize(root.left); // 左子树的序列化结果
  const right = serialize(root.right); // 右子树的序列化结果
  return root.val + "," + left + "," + right; // 按  根,左,右  拼接字符串
}
/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
function deserialize(data) {
  const arr = data.split(",");

  function buildTree(arr) {
    const rootVal = arr.shift();
    if (rootVal === "None") {
      return null;
    }
    const root = new TreeNode(rootVal);
    root.left = buildTree(arr);
    root.right = buildTree(arr);

    return root;
  }
  return buildTree(arr);
}
