/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
class MyQueue {
  /**
   * Initialize your data structure here.
   */
  constructor() {
    this.in = [];
    this.out = [];
  }

  /**
   * Push element x to the back of queue.
   * @param {number} x
   * @return {void}
   */
  push(x) {
    this.in.push(x);
  }

  /**
   * Removes the element from in front of queue and returns that element.
   * @return {number}
   */
  pop() {
    this.transform();
    return this.out.pop();
  }

  /**
   * Get the front element.
   * @return {number}
   */
  peek() {
    this.transform();
    return this.out[0];
  }

  /**
   * Returns whether the queue is empty.
   * @return {boolean}
   */
  empty() {
    return this.out.length <= 0 && this.in.length <= 0;
  }

  transform() {
    if (this.out.length > 0) return;
    while (this.in.length > 0) {
      const pop = this.in.pop();
      this.out.push(pop);
    }
  }
}
