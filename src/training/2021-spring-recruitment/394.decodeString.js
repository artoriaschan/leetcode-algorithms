/**
 * @param {string} s
 * @return {string}
 */
// 栈操作
// 两个栈：数字栈和字母栈
function decodeString(s) {
  if (s === "") return s;
  // 存储已重复的子串栈
  let substrStack = [];
  // 存储重复的次数栈
  let numStack = [];
  // 获取重复次数
  let time = 0;
  // 获取重复的字符串
  let ans = "";
  for (let sitem of s) {
    // 匹配到重复的字符串，重复次数入栈，已重复的子串入栈
    if (sitem === "[") {
      numStack.push(time);
      time = 0;
      substrStack.push(ans);
      ans = "";
    } else if (sitem === "]") {
      // 重复的子串收集完毕，遍历重复次数进行还原
      let time = numStack.pop();
      let tmp = "";
      for (let i = 0; i < time; i++) {
        tmp += ans;
      }
      // 与之前的子串进行拼接
      ans = substrStack.pop() + tmp;
    } else if (sitem >= "0" && sitem <= "9") {
      // 统计重复字数，注意多位数的统计
      time = time * 10 + parseInt(sitem, 10);
    } else {
      // 存储需重复的子串
      ans += sitem;
    }
  }
  return ans;
}
