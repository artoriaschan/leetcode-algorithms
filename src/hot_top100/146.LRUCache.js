/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 * 思路:
 *  利用map的有序性来实现LRU
 *    插入时, 若存在key, 删除并插入最新的, 获取keys, 删除第一个key对应的键值对
 *    获取时, 返回对应的value或者-1, 并删除重新插入, 改变其顺序
 */
// eslint-disable-next-line no-unused-vars
class LRUCache {
  /**
   * @param {number} capacity
   */
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  /**
   * @param {number} key
   * @return {number}
   */
  get(key) {
    if (!this.cache.has(key)) return -1;
    const v = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, v);
    return v;
  }

  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    this.cache.set(key, value);
    let keys = this.cache.keys();
    while (this.cache.size > this.capacity) {
      this.cache.delete(keys.next().value);
    }
  }
}
