/*
 * @Author: beiluo1@xiaohongshu.com
 * @Date: 2021-09-29 11:34:29
 * @LastEditTime: 2021-09-29 11:48:26
 * @LastEditors: beiluo1@xiaohongshu.com
 * @Description:
 */
export default class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
