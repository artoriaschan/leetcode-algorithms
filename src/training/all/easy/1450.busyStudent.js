/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
function busyStudent(startTime, endTime, queryTime) {
  let count = 0;
  for (let i in startTime) {
    if (queryTime >= startTime[i] && queryTime <= endTime[i]) {
      count++;
    }
  }
  return count;
}

const startTime = [1, 2, 3];
const endTime = [3, 2, 7];
const queryTime = 4;
console.log(busyStudent(startTime, endTime, queryTime));
