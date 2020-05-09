/**
 * @param {string[]} words
 * @param {string} S
 * @return {string}
 */
// eslint-disable-next-line no-unused-vars
function boldWords(words, S) {
  let isBold = new Array(S.length).fill(false);
  for (let word of words) {
    let n = S.indexOf(word, 0);
    while (n !== -1) {
      for (let i = n; i < n + word.length; i++) isBold[i] = true;
      n = S.indexOf(word, n + 1);
    }
  }
  let ans = "";
  if (isBold[0]) ans += "<b>";
  for (let i = 0; i < isBold.length; i++) {
    ans += S[i];
    if (i === isBold.length - 1) {
      if (isBold[i]) ans += "</b>";
      break;
    }
    if (isBold[i] && !isBold[i + 1]) ans += "</b>";
    if (!isBold[i] && isBold[i + 1]) ans += "<b>";
  }
  return ans;
}
