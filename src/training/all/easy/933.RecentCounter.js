/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
class RecentCounter {
  constructor() {
    this.requests = [];
  }

  /**
   * @param {number} t
   * @return {number}
   */
  ping(t) {
    const scopes = [t - 3000, t];
    this.requests.push(t);
    let count = 0;
    for (let req of this.requests) {
      if (req >= scopes[0] && req <= scopes[1]) {
        count++;
      }
    }
    return count;
  }
}

const recentCounter = new RecentCounter();
recentCounter.ping(1); // requests = [1]，范围是 [-2999,1]，返回 1
recentCounter.ping(100); // requests = [1, 100]，范围是 [-2900,100]，返回 2
recentCounter.ping(3001); // requests = [1, 100, 3001]，范围是 [1,3001]，返回 3
recentCounter.ping(3002); // requests = [1, 100, 3001, 3002]，范围是 [2,3002]，返回 3
