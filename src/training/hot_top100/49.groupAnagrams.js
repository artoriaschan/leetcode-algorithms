/**
 * @param {string[]} strs
 * @return {string[][]}
 * 思路:
 *  排序数组分类: 维护一个映射 ans : {String -> List}，其中每个键 K 是一个排序字符串，每个值是初始输入的字符串列表，排序后等于 K。
 *  按计数分类: 当且仅当它们的字符计数（每个字符的出现次数）相同时，两个字符串是字母异位词。
 *    也就是说按照单词在26字母中出现的次数为K, 维护一个映射 ans : {String -> List}
 *    e.g. key => #1#0#0#0#1#0#0#0#0#0#0#0#0#0#0#0#0#0#0#1#0#0#0#0#0#0, value => ["ate","eat","tea"]
 */
// eslint-disable-next-line no-unused-vars
function groupAnagrams(strs) {
  let map = new Map();
  for (let str of strs) {
    let key = str
      .split("")
      .sort()
      .join("");
    if (map.has(key)) {
      let arr = map.get(key);
      arr.push(str);
      map.set(key, arr);
    } else {
      let arr = [];
      arr.push(str);
      map.set(key, arr);
    }
  }
  return Array.from(map.values());
}
