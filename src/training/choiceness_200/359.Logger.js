/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */
// eslint-disable-next-line no-unused-vars
class Logger {
  /**
   * Initialize your data structure here.
   */
  constructor() {
    this.map = new Map();
    this.limit = 10;
  }

  /**
   * Returns true if the message should be printed in the given timestamp, otherwise returns false.
          If this method returns false, the message will not be printed.
          The timestamp is in seconds granularity. 
   * @param {number} timestamp 
   * @param {string} message
   * @return {boolean}
   */
  shouldPrintMessage(timestamp, message) {
    if (this.map.has(message)) {
      if (timestamp - this.map.get(message) >= this.limit) {
        this.map.set(message, timestamp);
        return true;
      }
      return false;
    }
    this.map.set(message, timestamp);
    return true;
  }
}
