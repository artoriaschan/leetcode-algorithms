/*
 * @Author: beiluo1@xiaohongshu.com
 * @Date: 2021-09-22 17:29:04
 * @LastEditTime: 2021-09-22 18:43:15
 * @LastEditors: beiluo1@xiaohongshu.com
 * @Description: https://leetcode-cn.com/problems/text-justification/
 */

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
function fullJustify1(words, maxWidth) {
  let ans = [];
  let row = [];
  let curCount = 0;
  let i = 0;
  while (i < words.length) {
    const word = words[i];
    const curRowWidth = curCount + word.length;
    if (curRowWidth + row.length < maxWidth) {
      row.push(word);
      curCount = curRowWidth;
      i++;
    } else {
      const rest = maxWidth - curCount;
      for (let i = 0; i < rest; ) {
        if (row.length === 1) {
          row[0] += " ";
          i++;
        } else {
          for (let j = 0; j < row.length - 1; j++) {
            row[j] += " ";
            i++;
            if (i >= rest) break;
          }
        }
      }
      ans.push(row.join(""));
      row = [];
      curCount = 0;
    }
  }
  for (let i = 0; i < row.length - 1; i++) {
    row[i] += " ";
  }
  const rest = maxWidth - curCount - row.length + 1;
  let str = row.join("");
  for (let i = 0; i < rest; i++) {
    str += " ";
  }
  ans.push(str);
  return ans;
}

const words = ["What", "must", "be", "acknowledgment", "shall", "be"];
const maxWidth = 16;

console.log(fullJustify1(words, maxWidth));

const fullJustify = (words, maxWidth) => {
  const ans = [];
  let right = 0;
  let n = words.length;
  while (true) {
    const left = right; // 当前行的第一个单词在 words 的位置
    let sumLen = 0; // 统计这一行单词长度之和
    while (right < n && sumLen + words[right].length + right - left <= maxWidth) {
      sumLen += words[right].length;
      right++;
    }

    // 当前行是最后一行：单词左对齐，且单词之间应只有一个空格，在行末填充剩余空格
    if (right === n) {
      const s = words.slice(left).join(" ");
      ans.push(s + blank(maxWidth - s.length));
      break;
    }
    const numWords = right - left;
    const numSpaces = maxWidth - sumLen;

    // 当前行只有一个单词：该单词左对齐，在行末填充空格
    if (numWords === 1) {
      ans.push(words[left] + blank(numSpaces));
      continue;
    }

    // 当前行不只一个单词
    const avgSpaces = Math.floor(numSpaces / (numWords - 1));
    const extraSpaces = numSpaces % (numWords - 1);
    const s1 = words.slice(left, left + extraSpaces + 1).join(blank(avgSpaces + 1)); // 拼接额外加一个空格的单词
    const s2 = words.slice(left + extraSpaces + 1, right).join(blank(avgSpaces)); // 拼接其余单词
    ans.push(s1 + blank(avgSpaces) + s2);
  }
  return ans;
};

const blank = n => {
  return new Array(n).fill(" ").join("");
};
