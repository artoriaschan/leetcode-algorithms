/**
 * @param {string} s
 * @return {string}
 */
function reverseWords(s) {
  const words = s.split(" ");
  const res = [];
  for (let word of words) {
    res.push(
      word
        .split("")
        .reverse()
        .join("")
    );
  }
  return res.join(" ");
}
