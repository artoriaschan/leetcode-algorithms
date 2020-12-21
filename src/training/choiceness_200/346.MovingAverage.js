/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
// eslint-disable-next-line no-unused-vars
class MovingAverage {
  /**
   * Initialize your data structure here.
   * @param {number} size
   */
  constructor(size) {
    this.size = size;
    this.queue = [];
  }

  /**
   * @param {number} val
   * @return {number}
   */
  next(val) {
    this.queue.push(val);
    if (this.queue.length > this.size) {
      this.queue.shift();
    }
    return this.queue.reduce((a, b) => a + b, 0) / this.queue.length;
  }
}
