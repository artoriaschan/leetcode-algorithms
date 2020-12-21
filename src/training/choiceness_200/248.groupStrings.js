/**
 * @param {string[]} strings
 * @return {string[][]}
 * 思路:
 *  hash: 找key值
 */
function computeDistance(char1, char2) {
  const code1 = char1.charCodeAt(0);
  const code2 = char2.charCodeAt(0);
  if (code2 - code1 > 0) {
    return code2 - code1;
  }
  return 26 + code2 - code1;
}

function getStringCode(str) {
  let strCode = "";
  for (let i = 1; i < str.length; i++) {
    const prev = str[i - 1];
    const cur = str[i];
    strCode += computeDistance(prev, cur) + ",";
  }
  return strCode.slice(0, -1);
}

// eslint-disable-next-line no-unused-vars
function groupStrings(strings) {
  const groupMap = {};
  for (let i = 0; i < strings.length; i++) {
    const str = strings[i];
    const code = getStringCode(str);
    if (groupMap[code] != null) {
      groupMap[code].push(str);
    } else {
      groupMap[code] = [str];
    }
  }
  return Object.keys(groupMap).map(k => groupMap[k]);
}
