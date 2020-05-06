/**
 * @param {number} n
 * @return {boolean}
 */
function getNext(n) {
  n += "";
  let sum = 0;
  for (let num of n) {
    sum += num * num;
  }
  return sum;
}
// eslint-disable-next-line no-unused-vars
function isHappy(n) {
  let slow = n;
  let fast = getNext(n);
  while (fast !== 1 && slow !== fast) {
    slow = getNext(slow);
    fast = getNext(getNext(fast));
  }
  return fast === 1;
}
