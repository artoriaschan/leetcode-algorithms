/**
 * @param {number[][]} people
 * @return {number[][]}
 * 思路:
 *  身高矮的人相对于身高高的人是看不见的
 *  按照身高降序排列, 身高相同时, 按照k值升序排列
 *  然后遍历排列好的数组, 插入元素
 */
// eslint-disable-next-line no-unused-vars
function reconstructQueue(people) {
  // 按照身高降序排列, 身高相同时, 按照k值升序排列
  people.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]));
  let ans = [];
  // 按照k值排列序列
  for (let p of people) {
    ans.splice(p[1], 0, p);
  }
  return ans;
}
