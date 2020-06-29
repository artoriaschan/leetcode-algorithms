/* eslint-disable class-methods-use-this */
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 * 思路:
 *  直接JSON方法可以实现
 *  序列化为自定义格式, 实现序列化和反序列化 => e.g. 1#[#3#[#5#6#]#2#4#]
 *  https://leetcode-cn.com/problems/serialize-and-deserialize-n-ary-tree/solution/shi-yong-stack-ji-lu-mei-yi-ge-fu-jie-dian-dfs-by-/
 */
function Node(val, children) {
  this.val = val;
  this.children = children;
}
// eslint-disable-next-line no-unused-vars
class Codec {
  /**
   * @param {Node} root
   * @return {string}
   */
  // Encodes a tree to a single string.
  serialize(root) {
    function encode(node) {
      if (node === null) return;
      str += node.val;
      str += "#";

      const hasChildren = !!node.children.length;
      if (hasChildren) {
        str += "[#";
      }
      for (let i = 0; i < node.children.length; i++) {
        const children = node.children[i];
        encode(children);
        if (i === node.children.length - 1) {
          str = str.slice(0, str.length - 1);
        }
      }
      if (hasChildren) {
        str += "#]#";
      }
    }
    let str = "";
    encode(root);
    str = str.slice(0, str.length - 1);
    return str;
  }

  /**
   * @param {string} data
   * @return {Node}
   */
  // Decodes your encoded data to tree.
  deserialize(data) {
    if (!data.length) return null;
    const strings = data.split("#");
    const stack = [];
    let root = null;
    let cur = null;
    for (let s of strings) {
      if (s === "[") {
        stack.push(cur);
      } else if (s === "]") {
        stack.pop();
      } else {
        let node = new Node(parseInt(s, 10));
        node.children = [];
        if (root == null) {
          root = node;
        } else {
          let parent = stack[stack.length - 1];
          parent.children.push(node);
        }
        cur = node;
      }
    }
    return root;
  }
}

// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.deserialize(codec.serialize(root));
