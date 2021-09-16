/*
 * @Author: beiluo1@xiaohongshu.com
 * @Date: 2021-09-16 15:53:07
 * @LastEditTime: 2021-09-16 16:02:51
 * @LastEditors: beiluo1@xiaohongshu.com
 * @Description: https://leetcode-cn.com/problems/length-of-last-word/
 */

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLastWord(s) {
  let sArr = s.split(" ");
  sArr = sArr.filter(item => item !== "");
  return sArr[sArr.length - 1].trim().length;
}
