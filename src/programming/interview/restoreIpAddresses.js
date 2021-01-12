function restoreIpAddresses(str) {
  const res = [];
  const len = str.length;
  function backtrack(tmp, index) {
    // 片段满4段，且耗尽所有字符
    if (tmp.length === 4 && index === len) {
      res.push(tmp.join("."));
      return;
    }
    // 满4段，字符未耗尽，不用往下选了
    if (tmp.length === 4 && index < len) {
      return;
    }
    for (let j = 1; j <= 3; j++) {
      // 加上要切的长度就越界，不能切这个长度
      if (index + j - 1 >= len) return;
      // 不允许有前导0
      if (j !== 1 && str[index] === "0") return;
      const num = str.slice(index, index + j);
      // 判断当前段的数字大小
      if (j === 3 && +num > 255) return;
      tmp.push(num);
      backtrack(tmp.slice(), index + j);
      tmp.pop();
    }
  }
  backtrack([], 0);
  return res;
}
const s = "101023";
console.log(restoreIpAddresses(s));
