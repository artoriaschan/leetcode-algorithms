// 双指针
function reverseWords(s) {
  const tmp = s.trim();
  let start = s.length - 1;
  let end = s.length - 1;
  let res = "";
  while (start >= 0) {
    while (start >= 0 && tmp[start] !== " ") {
      start--;
    }
    res += tmp.substring(start + 1, end + 1) + " ";

    while (start >= 0 && tmp[start] === " ") {
      start--;
    }
    end = start;
  }
  return res.trim();
}
