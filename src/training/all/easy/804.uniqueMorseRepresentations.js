/**
 * @param {string[]} words
 * @return {number}
 */
const morseMap = [
  ".-",
  "-...",
  "-.-.",
  "-..",
  ".",
  "..-.",
  "--.",
  "....",
  "..",
  ".---",
  "-.-",
  ".-..",
  "--",
  "-.",
  "---",
  ".--.",
  "--.-",
  ".-.",
  "...",
  "-",
  "..-",
  "...-",
  ".--",
  "-..-",
  "-.--",
  "--..",
];
function uniqueMorseRepresentations(words) {
  const set = new Set();
  for (let word of words) {
    let transform = "";
    for (let char of word) {
      const index = char.charCodeAt() - "a".charCodeAt();
      transform += morseMap[index];
    }
    set.add(transform);
  }
  return set.size;
}
