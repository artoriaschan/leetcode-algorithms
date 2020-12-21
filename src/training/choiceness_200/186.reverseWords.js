/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// eslint-disable-next-line no-unused-vars
function reverseWords(s) {
  const length = s.length;

  const reverse = (s, start, end) => {
    while (start < end) {
      let temp = s[end];
      s[end] = s[start];
      s[start] = temp;
      start++;
      end--;
    }
  };
  // 整个数组反转
  reverse(s, 0, length - 1);

  let start = 0;
  let end = 0;

  while (end < length) {
    if (s[end] === " ") {
      // 对每个单词进行翻转
      reverse(s, start, end - 1);
      start = end + 1;
    }
    end++;
  }

  // 翻转最后一个单词
  reverse(s, start, end - 1);
}
