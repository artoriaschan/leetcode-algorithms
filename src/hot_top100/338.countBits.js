/**
 * @param {number} num
 * @return {number[]}
 * 思路:
 *  内置函数(toString(radix))+正则
 *  https://leetcode-cn.com/problems/counting-bits/solution/338-bi-te-wei-ji-shu-by-alexer-660/
 */
// eslint-disable-next-line no-unused-vars
function countBits(num) {
  // let ans = [];
  // for (let i = 0; i <= num; i++) {
  //   ans.push((i.toString(2).match(/1/g) || []).length);
  // }
  // return ans;
  // 位操作
  // let ans = [0];
  // for (let i = 1; i <= num; i++) {
  //   let count = 0;
  //   let copy = i;
  //   while (copy !== 0) {
  //     count++;
  //     copy &= copy - 1;
  //   }
  //   ans.push(count);
  // }
  // return ans;
  // 模拟十进制, 取模
  let ans = [0];
  for (let i = 1; i <= num; i++) {
    let count = 0;
    let copy = i;
    while (copy) {
      if ((copy & 1) === 1) {
        count++;
      }
      copy >>>= 1;
    }
    ans.push(count);
  }
  return ans;
}
