/**
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 * 思路:
 *  双指针
 */
// eslint-disable-next-line no-unused-vars
class TwoSum {
  /**
   * Initialize your data structure here.
   */
  constructor() {
    this.nums = [];
    this.is_sorted = false;
  }

  /**
   * Add the number to an internal data structure..
   * @param {number} number
   * @return {void}
   */
  add(number) {
    this.nums.push(number);
    this.is_sorted = false;
  }

  /**
   * Find if there exists any pair of numbers which sum is equal to the value.
   * @param {number} value
   * @return {boolean}
   */
  find(value) {
    if (!this.is_sorted) {
      this.nums.sort((a, b) => a - b);
    }
    let low = 0;
    let high = this.nums.length - 1;
    while (low < high) {
      let twosum = this.nums[low] + this.nums[high];
      if (twosum < value) low += 1;
      else if (twosum > value) high -= 1;
      else return true;
    }
    return false;
  }
}
