/* eslint-disable camelcase */
// 单调队列、辅助队列
class MaxQueue {
  constructor() {
    this.queue = [];
    this.deque = []; // 该队列单调递减即可，保证最大值在队列头部，这样的话就可以在取出最大值的时候时间复杂度减低
  }

  /**
   * @return {number}
   */
  max_value() {
    return this.deque.length > 0 ? this.deque[0] : -1;
  }

  /**
   * @param {number} value
   * @return {void}
   */
  push_back(value) {
    this.queue.push(value);
    while (this.deque.length > 0 && this.deque[this.deque.length - 1] < value) {
      this.deque.pop();
    }
    this.deque.push(value);
  }

  /**
   * @return {number}
   */
  pop_front() {
    let head = this.queue.length > 0 ? this.queue.shift() : -1;
    if (this.deque.length > 0 && this.deque[0] === head) {
      this.deque.shift();
    }
    return head;
  }
}
