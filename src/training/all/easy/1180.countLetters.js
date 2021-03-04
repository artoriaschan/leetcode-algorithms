/**
 * @param {string} S
 * @return {number}
 */
function countLetters(S) {
  let count = 1;
  let sum = 0;
  for (let i = 1, len = S.length; i < len; i++) {
    if (S[i - 1] === S[i]) count++;
    else {
      sum += (count * (count + 1)) >> 1;
      count = 1;
    }
  }
  return sum + ((count * (count + 1)) >> 1);
}
