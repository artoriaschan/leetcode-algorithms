/* eslint-disable no-restricted-globals */
/**
 * @param {string} target
 * @param {string[]} dictionary
 * @return {string}
 */
// eslint-disable-next-line no-unused-vars
function minAbbreviation(target, dictionary) {
  const len = target.length;
  const res = [];
  const filterDictionary = dictionary.filter(word => word.length === len);
  if (!filterDictionary.length) return len.toString();
  // 获取target所有缩写
  function generateShortWord(n, tmp) {
    if (n === len) res.push(tmp);
    else {
      for (let i = n; i < len; ++i) {
        let num = i - n > 0 ? i - n : "";
        generateShortWord(i + 1, tmp + num + target[i]);
      }
      generateShortWord(len, tmp + (len - n));
    }
  }
  generateShortWord(0, "");
  function vaild(abbr, word) {
    let abbrIndex = 0;
    let wordIndex = 0;
    let abbrLen = abbr.length;
    let wordLen = word.length;
    while (abbrIndex < abbrLen && wordIndex < wordLen) {
      if (!isNaN(abbr[abbrIndex])) {
        if (abbr[abbrIndex] === "0") return false;
        let num = 0;
        while (abbrIndex < abbrLen && !isNaN(abbr[abbrIndex])) {
          num = num * 10 + parseInt(abbr[abbrIndex], 10);
          ++abbrIndex;
        }
        wordIndex += num;
      } else {
        if (word[wordIndex] !== abbr[abbrIndex]) return false;
        ++abbrIndex;
        ++wordIndex;
      }
    }
    return abbrIndex === abbrLen && wordIndex === wordLen;
  }
  res.sort((a, b) => a.match(/[0-9]+|[a-z]/g).length - b.match(/[0-9]+|[a-z]/g).length);
  let ans = "";
  for (let abbr of res) {
    ans = abbr;
    for (let word of filterDictionary) {
      if (vaild(abbr, word)) {
        ans = "";
        break;
      }
    }
    if (ans !== "") break;
  }
  return ans;
}
