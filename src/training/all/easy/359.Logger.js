/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */
class Logger {
  /**
   * Initialize your data structure here.
   */
  constructor() {
    this.cache = new Map();
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
    if (this.cache.has(message)) {
      const lasTimestamp = this.cache.get(message);
      if (timestamp >= lasTimestamp) {
        this.cache.set(message, timestamp + 10);
        return true;
      }
      return false;
    }
    this.cache.set(message, timestamp + 10);
    return true;
  }
}

const logger = new Logger();
console.log(logger.shouldPrintMessage(1, "foo")); // 返回 true ，下一次 "foo" 可以打印的时间戳是 1 + 10 = 11
console.log(logger.shouldPrintMessage(2, "bar")); // 返回 true ，下一次 "bar" 可以打印的时间戳是 2 + 10 = 12
console.log(logger.shouldPrintMessage(3, "foo")); // 3 < 11 ，返回 false
console.log(logger.shouldPrintMessage(8, "bar")); // 8 < 12 ，返回 false
console.log(logger.shouldPrintMessage(10, "foo")); // 10 < 11 ，返回 false
console.log(logger.shouldPrintMessage(11, "foo")); // 11 >= 11 ，返回 true ，下一次 "foo" 可以打印的时间戳是 11 + 10 = 21
