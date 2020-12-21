/**
 * @param {string[][]} synonyms
 * @param {string} text
 * @return {string[]}
 * 思路:
 *  并查集
 */
// eslint-disable-next-line no-unused-vars
function generateSentences(synonyms, text) {
  const disjoint = new Disjoint();
  for (const [a, b] of synonyms) {
    disjoint.union(a, b);
  }
  const synonymsMap = disjoint.getSynonymsMap();
  for (const block of synonymsMap.values()) {
    block.sort();
  }

  const res = [];
  const tokens = text.split(" ");

  function backtrack(i, acc) {
    if (i === tokens.length) {
      res.push(acc);
      return;
    }

    const token = tokens[i];
    const rootWord = disjoint.find(token);
    if (rootWord) {
      // 如果有同义词
      for (const word of synonymsMap.get(rootWord)) {
        backtrack(i + 1, acc + (i === 0 ? "" : " ") + word);
      }
    } else {
      backtrack(i + 1, acc + (i === 0 ? "" : " ") + token);
    }
  }

  backtrack(0, "");
  return res;
}

class Disjoint {
  constructor() {
    this.father = new Map();
  }

  find(x) {
    if (this.father.get(x) === x) return x;
    const res = this.find(this.father.get(x));
    this.father.set(x, res);
    return res;
  }

  union(x, y) {
    if (!this.father.has(x)) this.father.set(x, x);
    if (!this.father.has(y)) this.father.set(y, y);

    const parentX = this.find(x);
    const parentY = this.find(y);
    if (parentX !== parentY) {
      this.father.set(parentX, parentY);
    }
  }

  getSynonymsMap() {
    const res = new Map(); // 根 => 连通分量
    for (const curr of this.father.keys()) {
      const father = this.find(curr);
      if (!res.has(father)) {
        res.set(father, []);
      }
      res.get(father).push(curr);
    }
    return res;
  }
}
