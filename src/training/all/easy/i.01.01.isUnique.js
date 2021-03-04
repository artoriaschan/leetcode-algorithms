/**
 * @param {string} astr
 * @return {boolean}
 */
function isUnique(astr) {
  // return new Set(astr).size === astr.length;
  let mark = 0;
  for (let char of astr) {
    // 需要左移的位数
    const c = char.charCodeAt() - 97;
    // mark 与 左移结果进行与运算，如果不是0，说明其中有一位都是1，说明重复
    if ((mark & (1 << c)) !== 0) {
      return false;
    }
    // 不重复，mark 与 左移结果 进行或运算，相当于保存该值
    mark |= 1 << c;
  }
  return true;
}
