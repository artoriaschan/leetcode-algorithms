// https://leetcode-cn.com/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof/

function pathSum(root, target) {
  const res = [];
  backtrack(root, target, [], res);
  return res;
}

function backtrack(node, target, temp, res) {
  if (!node) return;
  const rest = target - node.val;
  if (rest === 0 && !node.left && !node.right) {
    temp.push(node.val);
    return;
  }
  temp.push(node.val);
  backtrack(node.left, rest, temp.slice(), res);
  temp.pop();
  temp.push(node.val);
  backtrack(node.right, rest, temp.slice(), res);
  temp.pop();
}
