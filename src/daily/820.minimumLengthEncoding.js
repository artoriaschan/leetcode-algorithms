/**
 * @param {string[]} words
 * @return {number}
 * 思路:
 *  剔除重复词尾的思路，通过哈希表降低查询的复杂度(空间换时间)。
 *  对 words 中的每个元素的词尾做切片并比对，如果词尾出现在 words 中，则删除该元素。
 */
// eslint-disable-next-line no-unused-vars
function minimumLengthEncoding(words) {
  let hashSet = new Set(words);
  for (let item of hashSet) {
    for (let i = 1; i < item.length; i++) {
      // 切片，看看是否词尾在 hashSet 中，切片从1开始，只看每个单词的词尾
      let target = item.slice(i);
      // eslint-disable-next-line no-unused-expressions
      hashSet.has(target) && hashSet.delete(target);
    }
  }
  let result = 0;
  // 根据 hashSet 中剩余元素计算最终长度
  hashSet.forEach(item => (result += item.length + 1));
  return result;
}
