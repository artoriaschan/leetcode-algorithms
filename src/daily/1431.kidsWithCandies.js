/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
// eslint-disable-next-line no-unused-vars
function kidsWithCandies(candies, extraCandies) {
  let max = 0;
  for (let candy of candies) {
    max = Math.max(candy, max);
  }
  let ans = [];
  for (let candy of candies) {
    ans.push(candy + extraCandies >= max);
  }
  return ans;
}
