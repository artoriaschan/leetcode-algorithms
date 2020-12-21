/**
 * @param {number} length
 * @param {number[][]} updates
 * @return {number[]}
 * 思路:
 *  区间加法
 */
// eslint-disable-next-line no-unused-vars
function getModifiedArray(length, updates) {
  let arr = new Array(length).fill(0);
  for (let update of updates) {
    const [startindex, endindex, inc] = update;
    arr = arr.map((item, index) => {
      if (index >= startindex && index <= endindex) {
        return (item += inc);
      }
      return item;
    });
  }
  return arr;
}
