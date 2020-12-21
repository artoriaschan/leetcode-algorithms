/**
 * @param {string} s
 * @return {string}
 * 思路:
 *  辅助栈
 */
function decodeString(s) {
  if (s === "") return s;
  let substrStack = [];
  let numStack = [];
  let time = 0;
  let ans = "";
  for (let sitem of s) {
    if (sitem === "[") {
      numStack.push(time);
      time = 0;
      substrStack.push(ans);
      ans = "";
    } else if (sitem === "]") {
      let time = numStack.pop();
      let tmp = "";
      for (let i = 0; i < time; i++) tmp += ans;
      ans = substrStack.pop() + tmp;
      // 将重复次数保存在次数栈numStack
    } else if (sitem >= "0" && sitem <= "9") time = time * 10 + parseInt(sitem, 10);
    else ans += sitem;
  }
  return ans;
}

const s = "2[abc]3[cd]ef";
const ds = decodeString(s);
console.log(ds);
