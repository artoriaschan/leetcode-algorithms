/*
 * @Author: beiluo1@xiaohongshu.com
 * @Date: 2021-09-18 14:12:52
 * @LastEditTime: 2021-09-22 17:27:58
 * @LastEditors: beiluo1@xiaohongshu.com
 * @Description: https://leetcode-cn.com/problems/add-binary/
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function addBinary(a, b) {
  const max = Math.max(a.length, b.length);
  let newA = a.padStart(max, "0");
  let newB = b.padStart(max, "0");
  const ans = [];
  let carry = false;
  for (let i = max - 1; i >= 0; i--) {
    if (carry) {
      if (newA[i] === "1" && newB[i] === "1") {
        ans[i] = "1";
        carry = true;
      } else if (newA[i] === "0" && newB[i] === "0") {
        ans[i] = "1";
        carry = false;
      } else {
        carry = true;
        ans[i] = "0";
      }
    } else if (newA[i] === "1" && newB[i] === "1") {
      ans[i] = "0";
      carry = true;
    } else if (newA[i] === "0" && newB[i] === "0") {
      ans[i] = "0";
      carry = false;
    } else {
      ans[i] = "1";
      carry = false;
    }
  }
  if (carry) ans.unshift("1");
  return ans.join("");
}
