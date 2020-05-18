/**
 * @param {string} word
 * @return {string[]}
 * 思路:
 *  回溯
 *  位运算
 */
// eslint-disable-next-line no-unused-vars
function generateAbbreviations(word) {
  function backtrack(str, i, k) {
    if (i === word.length) {
      if (k !== 0) str += k; // append the last k if non zero
      ans.push(str);
    } else {
      // the branch that word.charAt(i) is abbreviated
      backtrack(str, word, i + 1, k + 1);
      // the branch that word.charAt(i) is kept
      if (k !== 0) str += k;
      str += word[i];
      backtrack(str, word, i + 1, 0);
    }
  }
  let ans = [];
  backtrack("", word, 0, 0);
  return ans;
}
// eslint-disable-next-line no-unused-vars
function generateAbbreviations1(word) {
  // build the abbreviation for word from number x
  function abbr(word, x) {
    let builder = "";
    let k = 0;
    let n = word.length; // k is the count of consecutive ones in x
    for (let i = 0; i < n; ++i, x >>= 1) {
      if ((x & 1) === 0) {
        // bit is zero, we keep word.charAt(i)
        if (k !== 0) {
          // we have abbreviated k characters
          builder += k;
          k = 0; // reset the counter k
        }
        builder += word[i];
      } // bit is one, increase k
      else ++k;
    }
    if (k !== 0) builder += k; // don't forget to append the last k if non zero
    return builder;
  }
  let ans = [];
  for (
    let x = 0;
    x < 1 << word.length;
    ++x // loop through all possible x
  )
    ans.push(abbr(word, x));
  return ans;
}
