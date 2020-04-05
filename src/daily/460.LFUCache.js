/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 * 常见的缓存算法:
 *  LRU (Least recently used) 最近最少使用，如果数据最近被访问过，那么将来被访问的几率也更高。
 *  LFU (Least frequently used) 最不经常使用，如果一个数据在最近一段时间内使用次数很少，那么在将来一段时间内被使用的可能性也很小。
 *  FIFO (Fist in first out) 先进先出， 如果一个数据最先进入缓存中，则应该最早淘汰掉。
 * 思路:
 *  双hash => get: O(1); put: O(1)
 *  hash + 平衡二叉树 => get: O(logn); put: O(logn)
 *
 * https://leetcode-cn.com/problems/lfu-cache/solution/lfuhuan-cun-by-leetcode-solution/
 */
// eslint-disable-next-line no-unused-vars
class LFUCache {
  /**
   * @param {number} capacity
   */
  constructor(capacity) {
    this.limit = capacity;
    this.cache = new Map();
    this.freqMap = new Map();
  }

  /**
   * @param {number} key
   * @return {number}
   */
  get(key) {
    let cache = this.cache;
    let r = -1;
    if (typeof cache[key] !== "undefined") {
      let o = cache[key];
      r = o.value;
      // 更新频率记录
      this.updateL(key, o);
    }
    return r;
  }

  updateL(key, obj) {
    let freq = obj.freq;
    let arr = this.freqMap[freq];
    // 删除原频率记录
    this.freqMap[freq].splice(arr.indexOf(key), 1);
    // 清理
    if (this.freqMap[freq].length === 0) delete this.freqMap[freq];
    // 更新频率
    // eslint-disable-next-line no-multi-assign
    freq = obj.freq += 1;
    if (!this.freqMap[freq]) this.freqMap[freq] = [];
    this.freqMap[freq].push(key);
  }

  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    let cache = this.cache;
    let limit = this.limit;
    let fmap = this.freqMap;
    if (limit <= 0) return;
    if (typeof key === "undefined" || typeof value === "undefined") throw new Error("key or value is undefined");
    // 存在则直接更新
    if (typeof cache[key] === "undefined") {
      // 获取频率 key
      // 判断容量是否满
      if (Object.keys(cache).length === limit) {
        let fkeys = Object.keys(fmap);
        let freq = fkeys[0];
        // 获取key集合
        let keys = fmap[freq];
        // 淘汰首位
        delete cache[keys.shift()];
        // delete cache[keys[0]];
        // keys.splice(0, 1);
        // 清理
        if (fmap[freq].length === 0) delete fmap[freq];
      }
      // 频率记录是否存在
      if (!fmap[1]) fmap[1] = [];
      // 插入新值
      fmap[1].push(key);
      cache[key] = {
        value: value,
        freq: 1, // 默认的频率
      };
    } else {
      cache[key].value = value;
      // 更新频率记录
      this.updateL(key, cache[key]);
    }
  }
}
