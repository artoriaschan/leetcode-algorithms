/**
 * @param {string} text
 * @param {string[]} words
 * @return {number[][]}
 */
// eslint-disable-next-line no-unused-vars
function indexPairs(text, words) {
  let ans = [];
  for (let word of words) {
    let copyText = text;
    let lastIndex = 0;
    while (copyText.indexOf(word) >= 0) {
      let res = [];
      let index = copyText.indexOf(word);
      res.push(lastIndex + index);
      res.push(lastIndex + index + word.length - 1);
      ans.push(res);
      lastIndex += index + 1;
      copyText = copyText.slice(index + 1);
    }
  }
  ans.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });
  return ans;
}
