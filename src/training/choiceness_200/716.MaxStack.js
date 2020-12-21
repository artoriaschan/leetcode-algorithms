/**
 * Your MaxStack object will be instantiated and called as such:
 * var obj = new MaxStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.peekMax()
 * var param_5 = obj.popMax()
 * 思路:
 *  双栈
 */
// eslint-disable-next-line no-unused-vars
class MaxStack {
  /**
   * initialize your data structure here.
   */
  constructor() {
    this.stack = [];
    this.maxStack = [];
  }

  /**
   * @param {number} x
   * @return {void}
   */
  push(x) {
    let max = this.maxStack.length === 0 ? x : this.maxStack[this.maxStack.length - 1];
    this.maxStack.push(max > x ? max : x);
    this.stack.push(x);
  }

  /**
   * @return {number}
   */
  pop() {
    this.maxStack.pop();
    return this.stack.pop();
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
  peekMax() {
    return this.maxStack[this.maxStack.length - 1];
  }

  /**
   * @return {number}
   */
  popMax() {
    let max = this.peekMax();
    let buffer = [];
    while (this.top() !== max) buffer.push(this.pop());
    this.pop();
    while (buffer.length !== 0) this.push(buffer.pop());
    return max;
  }
}
