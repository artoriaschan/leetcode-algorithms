/**
 * 实现一个方法,传入rule，str,返回boolean；
 * rule为+、*、*{N}:
 * + 代表 1 个字符
 * * 代表 3 个字符
 * *{N} 代表 N 个字符
 * 例如：+**{4} => "abbbcccc"。
 */
function genRule(lastCount) {
  switch (lastCount) {
    case 1:
      return "+";
    case 3:
      return "*";
    default:
      return `*{${lastCount}}`;
  }
}
function checkStr(rule, str) {
  let res = false;
  let lastChar = str[0];
  let lastCount = 1;
  let rerule = "";
  for (let i = 1; i < str.length; i++) {
    if (lastChar !== str[i]) {
      lastChar = str[i];
      if (lastCount > 0) {
        rerule += genRule(lastCount);
      }
      lastCount = 1;
    } else {
      lastCount++;
    }
  }
  rerule += genRule(lastCount);
  if (rerule === rule) res = true;
  return res;
}

const rule = "+***{4}*{6}";
const str = "abbbcccddddeeeeee";
console.log(checkStr(rule, str));
