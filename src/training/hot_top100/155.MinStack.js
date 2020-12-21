/**
 * 思路:
 *  基栈: 将最小值放入栈中维护
 */
// eslint-disable-next-line no-unused-vars
class MinStack {
  constructor() {
    this.stack = [];
    this.min = Infinity;
  }

  /**
   * @param {number} x
   * @return {void}
   */
  push(val) {
    if (this.min >= val) {
      this.stack.push(this.min);
      this.min = val;
    }
    this.stack.push(val);
  }

  /**
   * @return {void}
   */
  pop() {
    if (this.stack.pop() === this.min) {
      this.min = this.stack.pop();
    }
  }

  /**
   * @return {number}
   */
  top() {
    return this.stack[this.stack.length - 1];
  }

  /**
   * @return {number}
   */
  getMin() {
    return this.min;
  }
}
