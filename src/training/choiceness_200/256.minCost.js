/**
 * @param {number[][]} costs
 * @return {number}
 */
// eslint-disable-next-line no-unused-vars
function minCost(costs) {
  let preR = 0;
  let curR = 0;
  let preB = 0;
  let curB = 0;
  let preG = 0;
  let curG = 0;

  for (let i = 0; i < costs.length; i++) {
    curR = Math.min(preB, preG) + costs[i][0];
    curB = Math.min(preR, preG) + costs[i][1];
    curG = Math.min(preR, preB) + costs[i][2];
    preR = curR;
    preB = curB;
    preG = curG;
  }

  return Math.min(Math.min(curR, curB), curG);
}
