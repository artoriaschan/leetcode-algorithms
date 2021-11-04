/*
 * @Author: beiluo1@xiaohongshu.com
 * @Date: 2021-10-23 17:25:52
 * @LastEditTime: 2021-10-23 17:33:53
 * @LastEditors: beiluo1@xiaohongshu.com
 * @Description: https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node/
 */
/**
 * @param {Node} root
 * @return {Node}
 */
// 位于第 x 层时为第 x + 1 层建立 next 指针
let last = null;
let nextStart = null;
function connect(root) {
  if (root === null) return null;
  let start = root;
  while (start != null) {
    last = null;
    nextStart = null;
    for (let p = start; p !== null; p = p.next) {
      if (p.left !== null) {
        handle(p.left);
      }
      if (p.right !== null) {
        handle(p.right);
      }
    }
    start = nextStart;
  }
  return root;
}

function handle(p) {
  if (last !== null) {
    last.next = p;
  }
  if (nextStart === null) {
    nextStart = p;
  }
  last = p;
}
