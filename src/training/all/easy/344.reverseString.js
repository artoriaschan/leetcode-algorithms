/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
function reverseString(s) {
  const mid = Math.floor(s.length / 2);
  for (let i = 0; i < mid; i++) {
    const end = s.length - i - 1;
    const temp = s[i];
    s[i] = s[end];
    s[end] = temp;
  }
}
