// 通过构建字典树对文本数组进行筛选  如['abc', 'def', 'abde']，过滤出'ab'开头的字符串。
class Trie {
  constructor() {
    this.root = Object.create(null);
  }

  insert(word) {
    let node = this.root;
    for (const c of word) {
      if (!node[c]) node[c] = Object.create(null);
      node = node[c];
    }
    node.isWord = true;
  }

  traverse(word) {
    let node = this.root;
    for (const c of word) {
      node = node[c];
      if (!node) return null;
    }
    return node;
  }

  search(word) {
    const node = this.traverse(word);
    return !!node && !!node.isWord;
  }

  startsWith(prefix) {
    return this.traverse(prefix);
  }
}

function searchWith(arr, prefix) {
  const trie = new Trie();
  for (let str of arr) {
    trie.insert(str);
  }
  const res = [];
  const node = trie.startsWith(prefix);
  if (!node) return res;
  let map = {
    [prefix]: node,
  };
  while (Object.keys(map).length > 0) {
    const keys = Object.keys(map);
    const next = {};
    for (let key of keys) {
      const node = map[key];
      for (let prop in node) {
        if (prop === "isWord" && node[prop] === true) {
          res.push(key);
        } else {
          next[key + prop] = node[prop];
        }
      }
    }
    map = next;
  }
  return res;
}

const arr = ["abc", "def", "abde", "abdee"];
const prefix = "ab";
console.log(searchWith(arr, prefix));
