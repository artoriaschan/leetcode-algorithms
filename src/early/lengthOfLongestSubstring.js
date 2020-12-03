var lengthOfLongestSubstring = function(s) {
  if (!s) return 0;
  let tmp = [];
  let subStrStart = 0;
  let maxSubStrNum = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = subStrStart; j < s.length; j++) {
      let index = tmp.indexOf(s[j]);
      if (index < 0) {
        tmp.push(s[j]);
        if (maxSubStrNum < tmp.length) {
          maxSubStrNum = tmp.length;
        }
      } else {
        subStrStart = subStrStart < s.length ? subStrStart + 1 : s.length;
        tmp = [];
        break;
      }
    }
  }
  return maxSubStrNum;
};
let str = "ohommdwdsdsaxxxccasdwdad";
console.info(lengthOfLongestSubstring(str));
