/**
 * @param {string} s
 * @return {boolean}
 */
function halvesAreAlike(s) {
  const set = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let half = s.length / 2;
  let numA = 0;
  let numB = 0;
  for (let i = 0; i < s.length; i++) {
    if (i < half) {
      if (set.has(s[i])) numA++;
    } else if (set.has(s[i])) numB++;
  }
  return numA === numB;
}

const s = "book";
console.log(halvesAreAlike(s));
