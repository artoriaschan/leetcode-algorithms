/* eslint-disable no-param-reassign */
/*
 * @Author: beiluo1@xiaohongshu.com
 * @Date: 2021-09-18 14:02:13
 * @LastEditTime: 2021-09-18 14:12:19
 * @LastEditors: beiluo1@xiaohongshu.com
 * @Description: https://leetcode-cn.com/problems/plus-one/
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
function plusOne(digits) {
  const addOne = digits[digits.length - 1] + 1;
  if (addOne < 10) {
    digits[digits.length - 1] = addOne;
    return digits;
  }
  let carry = addOne / 10;
  let rest = addOne % 10;
  digits[digits.length - 1] = rest;
  for (let i = digits.length - 2; i >= 0; i--) {
    const add = digits[i] + carry;
    if (add < 10) {
      digits[i] = add;
      return digits;
    }
    carry = add / 10;
    rest = add % 10;
    digits[i] = rest;
  }
  digits.unshift(carry);
  return digits;
}
