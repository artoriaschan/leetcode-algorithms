// https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof/

function verifyPostorder(postorder) {
  return recur(postorder, 0, postorder.length - 1);
}

function recur(postorder, i, j) {
  if (i >= j) return true;
  let p = i;
  while (postorder[p] < postorder[j]) p++;
  const m = p;
  while (postorder[p] > postorder[j]) p++;
  // p = j：判断此树是否正确。
  // recur(i, m - 1)： 判断此树的左子树是否正确。
  // recur(m, j - 1)： 判断此树的右子树是否正确。
  return p === j && recur(postorder, i, m - 1) && recur(postorder, m, j - 1);
}
