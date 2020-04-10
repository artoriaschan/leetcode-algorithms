/**
 * @param {string} s
 * @return {string}
 * 思路:
 *  使用语言特性
 */
// eslint-disable-next-line no-unused-vars
function reverseWords(s) {
  const words = s
    .trim()
    .split(" ")
    .filter(word => word !== "");
  words.reverse();
  return words.join(" ");
}
