/**
 * Your PhoneDirectory object will be instantiated and called as such:
 * var obj = new PhoneDirectory(maxNumbers)
 * var param_1 = obj.get()
 * var param_2 = obj.check(number)
 * obj.release(number)
 */
// eslint-disable-next-line no-unused-vars
class PhoneDirectory {
  /**
 * Initialize your data structure here
        @param maxNumbers - The maximum numbers that can be stored in the phone directory.
 * @param {number} maxNumbers
 */
  constructor(maxNumbers) {
    this.arr = new Array(maxNumbers).fill(true);
  }

  /**
   * Provide a number which is not assigned to anyone.
          @return - Return an available number. Return -1 if none is available.
   * @return {number}
   */
  get() {
    let index = this.arr.indexOf(true);
    if (index > -1) {
      this.arr[index] = false;
      return index;
    }
    return -1;
  }

  /**
   * Check if a number is available or not.
   * @param {number} number
   * @return {boolean}
   */
  check(number) {
    return this.arr[number];
  }

  /**
   * Recycle or release a number.
   * @param {number} number
   * @return {void}
   */
  release(number) {
    this.arr[number] = true;
  }
}
