/* eslint-disable no-unused-expressions */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 * 思路:
 *  BFS + hash
 *  例: [3,9,8,4,0,1,7,null,null,null,2,5]（注意：0 的右侧子节点为 2，1 的左侧子节点为 5）
 * level:      -2  -1   0   1    2
                        3
                        /\
                      /    \
                    9       8
                    /\      /\
                  /    \  /    \
                4       01       7
                        /\
                      /    \
                    5       2
 */
// eslint-disable-next-line no-unused-vars
function verticalOrder(root) {
  if (!root) {
    return [];
  }
  const res = [];
  const queue = [{ level: 0, node: root }];
  const map = new Map();
  while (queue.length) {
    const temp = queue.shift();
    const level = temp.level;
    const node = temp.node;
    if (!map.has(level)) {
      map.set(level, []);
    }
    const arr = map.get(level);
    arr.push(node.val);
    map.set(level, arr);
    node.left && queue.push({ level: level - 1, node: node.left });
    node.right && queue.push({ level: level + 1, node: node.right });
  }
  const mapArr = Array.from(map);
  mapArr.sort((a, b) => a[0] - b[0]);
  mapArr.forEach(arr => {
    res.push(arr[1]);
  });
  return res;
}
