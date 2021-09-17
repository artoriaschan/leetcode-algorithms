/*
 * @Author: beiluo1@xiaohongshu.com
 * @Date: 2021-09-17 12:19:37
 * @LastEditTime: 2021-09-17 12:20:45
 * @LastEditors: beiluo1@xiaohongshu.com
 * @Description: ListNode
 */
export default class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
