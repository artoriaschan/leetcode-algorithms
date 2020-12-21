/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
// eslint-disable-next-line no-unused-vars
function encode(strs) {
  if (strs.length === 0) return String.fromCharCode(258);
  let d = String.fromCharCode(257);
  let res = "";
  for (let i = 0; i < strs.length; ++i) {
    res += strs[i];
    res += d;
  }
  res = res.slice(0, res.length - 1);
  return res;
}

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
// eslint-disable-next-line no-unused-vars
function decode(s) {
  if (s === String.fromCharCode(258)) return [];
  return s.split(String.fromCharCode(257));
}
/**
 * Your functions will be called as such:
 * decode(encode(strs));
 * 思路:
 *  使用非 ASCII 码的分隔符
 */
