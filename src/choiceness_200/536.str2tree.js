/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {string} s
 * @return {TreeNode}
 */
// eslint-disable-next-line no-unused-vars
function str2tree(s) {
  const stack = [];
  if (s === "") return null;
  for (let i = 0; i < s.length; ++i) {
    if (s.charAt(i) === ")") stack.pop();
    else if ((s.charAt(i) >= "0" && s.charAt(i) <= "9") || s.charAt(i) === "-") {
      let start = i;
      // 找到根元素的值
      while (i < s.length - 1 && s.charAt(i + 1) >= "0" && s.charAt(i + 1) <= "9") {
        i++;
      }
      let root = new TreeNode(parseInt(s.substring(start, i + 1), 10));
      // 获取父节点
      if (!stack.isEmpty()) {
        let parent = stack[stack.length - 1];
        if (parent.left == null) parent.left = root;
        else parent.right = root;
      }

      // 压栈
      stack.push(root);
    }
  }
  if (!stack.length) return null;
  return stack[stack.length - 1];
}
