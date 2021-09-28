/*
 * @Author: beiluo1@xiaohongshu.com
 * @Date: 2021-09-28 16:01:52
 * @LastEditTime: 2021-09-28 16:14:27
 * @LastEditors: beiluo1@xiaohongshu.com
 * @Description: https://leetcode-cn.com/problems/gray-code/
 */
/**
 * @param {number} n
 * @return {number[]}
 */
function grayCode(n) {
  const ans = [0];
  let head = 1;
  for (let i = 0; i < n; i++) {
    for (let j = ans.length - 1; j >= 0; j--) ans.push(head + ans[j]);
    head <<= 1;
  }
  return ans;
}
