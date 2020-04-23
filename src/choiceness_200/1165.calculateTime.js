/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
// eslint-disable-next-line no-unused-vars
function calculateTime(keyboard, word) {
  let len = word.length;
  let step = 0;
  let ans = 0;
  for (let i = 0; i < len; i++) {
    let local = keyboard.indexOf(word[i]);
    ans += Math.abs(local - step);
    step = local;
  }
  return ans;
}

// eslint-disable-next-line no-unused-vars
function calculateTime1(keyboard, word) {
  let map = new Map();
  let sum = 0;
  let prev = 0;
  for (let i = 0; i < keyboard.length; i++) {
    map.set(keyboard.charAt(i), i);
  }
  for (let i = 0; i < word.length; i++) {
    let val = map.get(word.charAt(i));
    sum += Math.abs(prev - val);
    prev = val;
  }
  return sum;
}
