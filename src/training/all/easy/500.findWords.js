/**
 * @param {string[]} words
 * @return {string[]}
 */
function findWords(words) {
  const map = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
  const result = [];
  for (let i = 0; i < words.length; i++) {
    let row;
    const word = words[i];
    for (let j = 0; j < map.length; j++) {
      if (map[j].indexOf(word[0].toLowerCase()) !== -1) {
        row = map[j];
        break;
      }
    }
    if (!row) continue;
    let flag = true;
    for (let j = 1; j < word.length; j++) {
      if (row.indexOf(word[j].toLowerCase()) === -1) {
        flag = false;
        break;
      }
    }
    if (flag) result.push(word);
  }
  return result;
}

const words = ["Hello", "Alaska", "Dad", "Peace"];
console.log(findWords(words));
