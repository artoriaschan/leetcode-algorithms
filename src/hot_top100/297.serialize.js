/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}
/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
// eslint-disable-next-line no-unused-vars
function serialize(root) {
  let str = "";
  function rserialize(root) {
    // Recursive serialization.
    if (root === null) {
      str += "null,";
    } else {
      str += root.val + ",";
      rserialize(root.left);
      rserialize(root.right);
    }
  }
  rserialize(root);
  return str;
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
// eslint-disable-next-line no-unused-vars
function deserialize(data) {
  function rdeserialize(l) {
    // Recursive deserialization.
    if (l[0] === "null") {
      l.remove(0);
      return null;
    }

    let root = new TreeNode(parseInt(l[0], 10));
    l.splice(0, 1);
    root.left = rdeserialize(l);
    root.right = rdeserialize(l);
    return root;
  }

  let dataArray = data.split(",");
  return rdeserialize(dataArray);
}
