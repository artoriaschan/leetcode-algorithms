/**
 * Your LogSystem object will be instantiated and called as such:
 * var obj = new LogSystem()
 * obj.put(id,timestamp)
 * var param_2 = obj.retrieve(s,e,gra)
 */
function format(timestamp, gra = 5, end = false) {
  const timeArr = timestamp.split(":");
  let res = ["1999", "00", "01", "00", "00", "00"];
  for (let i = 0; i <= gra; ++i) {
    res[i] = timeArr[i];
  }
  if (end) {
    res[gra]++;
  }
  res = res.map(a => parseInt(a, 10));
  res[1] -= res[1] === 0 ? 0 : 1;
  return res;
}
// eslint-disable-next-line no-unused-vars
class LogSystem {
  constructor() {
    this.cache = new Map();
    // Year:Month:Day:Hour:Minute:Second
    this.gra = {
      Year: 0,
      Month: 1,
      Day: 2,
      Hour: 3,
      Minute: 4,
      Second: 5,
    };
  }

  /**
   * @param {number} id
   * @param {string} timestamp
   * @return {void}
   */
  put(id, timestamp) {
    this.cache.set(timestamp, id);
  }

  /**
   * @param {string} s
   * @param {string} e
   * @param {string} gra
   * @return {number[]}
   */
  retrieve(s, e, gra) {
    const index = this.gra[gra];
    const start = format(s, index);
    const end = format(e, index, true);
    const starttimestamp = new Date(...start).getTime();
    const endtimestamp = new Date(...end).getTime();
    const ans = [];
    for (let [timestamp, id] of this.cache.entries()) {
      let time = new Date(...format(timestamp)).getTime();
      if (time >= starttimestamp && time < endtimestamp) {
        ans.push(id);
      }
    }
    return ans;
  }
}
