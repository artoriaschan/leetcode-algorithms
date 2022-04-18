function postorderTraversal(root) {
  const res = [];
  postorder(root, res);
  return res;
}
function postorder(root, order) {
  if (!root) return;
  postorder(root.left, order);
  postorder(root.right, order);
  order.push(root.val);
}
