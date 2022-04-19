// https://leetcode-cn.com/problems/delete-node-in-a-bst/

function successor(root) {
  root = root.right;
  while (root.left) root = root.left;
  return root.val;
}
function predecessor(root) {
  root = root.left;
  while (root.right) root = root.right;
  return root.val;
}
function deleteNode(root, key) {
  if (!root) return null;
  if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else if (!root.left && !root.right) {
    root = null;
  } else if (root.right) {
    root.val = successor(root);
    root.right = deleteNode(root.right, root.val);
  } else {
    root.val = predecessor(root);
    root.left = deleteNode(root.left, root.val);
  }
  return root;
}
