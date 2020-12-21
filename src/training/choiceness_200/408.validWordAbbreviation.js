/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
// eslint-disable-next-line no-unused-vars
function validWordAbbreviation(word, abbr) {
  let wordLen = word.length;
  let abbrLen = 0;
  let num = 0;
  let flag = 1;
  [...abbr].forEach(value => {
    if (value >= "a" && value <= "z") {
      abbrLen += num + 1;
      num = 0;
      if (abbrLen > wordLen || value !== word[abbrLen - 1]) {
        flag = 0;
      }
    } else {
      if (num === 0 && value === "0") {
        flag = 0;
      }
      num = num * 10 + (value - "0");
    }
  });
  return flag && abbrLen + num === wordLen;
}
