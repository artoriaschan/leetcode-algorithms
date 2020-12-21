/**
 * @param {string} s
 * @return {string}
 */
// eslint-disable-next-line no-unused-vars
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
