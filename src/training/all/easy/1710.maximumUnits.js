/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
function maximumUnits(boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1]);
  let res = 0;
  for (let i = 0; i < boxTypes.length; i++) {
    res += Math.max(0, Math.min(boxTypes[i][0], truckSize) * boxTypes[i][1]);
    truckSize -= boxTypes[i][0];
  }
  return res;
}
