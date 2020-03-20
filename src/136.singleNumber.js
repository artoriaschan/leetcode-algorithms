/* eslint-disable no-unused-vars */
/**
 * @param {number[]} nums
 * @return {number}
 * 思路:
 *  线性时间复杂度 O(n)O(n)，很容易想到使用 Hash 映射来进行计算，遍历一次后结束得到结果，
 * 但是在空间复杂度上会达到 O(n)O(n)，需要使用较多的额外空间
 * 既满足时间复杂度又满足空间复杂度，就要提到位运算中的异或运算 XOR, 主要因为异或运算有以下几个特点：
 *    一个数和 0 做 XOR 运算等于本身：a⊕0 = a
 *    一个数和其本身做 XOR 运算等于 0：a⊕a = 0
 *    XOR 运算满足交换律和结合律：a⊕b⊕a = (a⊕a)⊕b = 0⊕b = b
 */
function singleNumber(nums) {
  let res = 0;
  for (let num of nums) {
    // eslint-disable-next-line no-bitwise
    res ^= num;
  }
  return res;
}
