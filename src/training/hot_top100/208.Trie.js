/* eslint-disable max-classes-per-file */
/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 *
 * 思路:
 *  Trie (发音为 "try") 或前缀树是一种树数据结构，用于检索字符串数据集中的键。
 */

/**
 *  Create Trie Node
 */
class TrieNode {
  constructor() {
    this.next = {};
    this.isEnd = false;
  }
}
/**
 *  Create Trie
 */
// eslint-disable-next-line no-unused-vars
class Trie {
  /**
   * Initialize your data structure here.
   */
  constructor() {
    this.root = new TrieNode();
  }

  /**
   * Inserts a word into the trie.
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    let node = this.root;
    for (let i = 0; i < word.length; ++i) {
      if (!node.next[word[i]]) {
        node.next[word[i]] = new TrieNode();
      }
      node = node.next[word[i]];
    }
    node.isEnd = true;
    return true;
  }

  /**
   * Returns if the word is in the trie.
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    if (!word) return false;

    let node = this.root;
    for (let i = 0; i < word.length; ++i) {
      if (node.next[word[i]]) {
        node = node.next[word[i]];
      } else {
        return false;
      }
    }
    return node.isEnd;
  }

  /**
   * Returns if there is any word in the trie that starts with the given prefix.
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    if (!prefix) return true;

    let node = this.root;
    for (let i = 0; i < prefix.length; ++i) {
      if (node.next[prefix[i]]) {
        node = node.next[prefix[i]];
      } else {
        return false;
      }
    }
    return true;
  }
}
