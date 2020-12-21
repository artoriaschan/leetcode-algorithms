/**
 * @param {string} source
 * @param {string} target
 * @return {number}
 */
// eslint-disable-next-line no-unused-vars
function shortestWay(source, target) {
  let count = 0;
  for (let i = 0; i < target.length; ) {
    let charIndex = source.indexOf(target[i]);
    if (charIndex === -1) {
      return -1;
    }
    i++;

    let subStr = source.substr(charIndex + 1);
    charIndex = subStr.indexOf(target[i]);

    while (i < target.length && charIndex > -1) {
      i++;
      subStr = subStr.substr(charIndex + 1);
      charIndex = subStr.indexOf(target[i]);
    }
    count++;
  }
  return count;
}
