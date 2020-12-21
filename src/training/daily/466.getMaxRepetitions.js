/**
 * @param {string} s1
 * @param {number} n1
 * @param {string} s2
 * @param {number} n2
 * @return {number}
 * 思路:
 *  找出循环节: https://leetcode-cn.com/problems/count-the-repetitions/solution/tong-ji-zhong-fu-ge-shu-by-leetcode-solution/
 */
// eslint-disable-next-line no-unused-vars
function getMaxRepetitions(s1, n1, s2, n2) {
  let arr1 = s1.split("");
  let arr2 = s2.split("");

  let index = 0; // 匹配s2字符串中的位置
  let cnt = 0; // 出现的总次数
  for (let i = 0; i < n1; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[j] === arr2[index]) {
        index++;
      }
      // 匹配一个，重置s2
      if (index === arr2.length) {
        index = 0;
        ++cnt;
      }
    }
  }
  return parseInt(cnt / n2, 10);
}
