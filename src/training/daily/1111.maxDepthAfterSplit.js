/**
 * @param {string} seq
 * @return {number[]}
 * 思路:
 *  用栈进行括号匹配: 这边不需要真正的栈来匹配, 可用一个变量模拟
 */
// eslint-disable-next-line no-unused-vars
function maxDepthAfterSplit(seq) {
  let dep = 0;
  return seq.split("").map(value => {
    if (value === "(") {
      ++dep;
      return dep % 2;
    }
    let ans = dep % 2;
    --dep;
    return ans;
  });
}
