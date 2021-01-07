/**
 * 快手一面
 * 匹配包含括号字符串是否有效
 * @param {*} str
 */
function match(str) {
  // 空字符串可被认为是有效字符串
  if (str === "") return true;
  const len = str.length;
  if (len % 2 !== 0) return false;
  const stack = [];
  for (let i = 0; i < len; i++) {
    if (str[i] === "(" || str[i] === "[" || str[i] === "{") stack.push(str[i]);
    else {
      const pre = stack.pop();
      switch (pre) {
        case "(":
          if (str[i] !== ")") return false;
          break;
        case "[":
          if (str[i] !== "]") return false;
          break;
        case "{":
          if (str[i] !== "}") return false;
          break;
        default:
          // 右括号多余的情况
          return false;
      }
    }
  }
  // 左括号多余的情况
  if (stack.length > 0) return false;
  return true;
}
