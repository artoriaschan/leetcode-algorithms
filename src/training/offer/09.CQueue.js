class CQueue {
  constructor() {
    this.enStack = [];
    this.deStack = [];
  }

  /**
   * @param {number} value
   * @return {void}
   */
  appendTail(value) {
    this.enStack.push(value);
  }

  /**
   * @return {number}
   */
  deleteHead() {
    if (this.deStack.length === 0 && this.enStack.length === 0) return -1;
    if (this.deStack.length === 0) {
      while (this.enStack.length > 0) {
        const item = this.enStack.pop();
        this.deStack.push(item);
      }
    }
    return this.deStack.pop();
  }
}
