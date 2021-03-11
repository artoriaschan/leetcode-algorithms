/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
class NumArray {
  /**
   * @param {number[]} nums
   */
  constructor(nums) {
    this.nums = nums;
  }
  /**
   * @param {number} i
   * @param {number} j
   * @return {number}
   */

  sumRange(i, j) {
    const subNums = this.nums.slice(i, j + 1);
    return subNums.reduce((sum, num) => sum + num, 0);
  }
}
