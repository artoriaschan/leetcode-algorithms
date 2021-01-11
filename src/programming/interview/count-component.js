/**
 * 实现一个Vue组件，要求能精准计时
 * 思路：
 *  requestAnimationFrame
 *  服务端校时
 */
export default {
  el: "#app",
  template: `<div> {{formatNum(hours)}}:{{formatNum(minutes)}}:{{formatNum(seconds)}} </div>`,
  data: () => {
    return {
      seconds: 0,
      minutes: 0,
      hours: 0,
    };
  },
  mounted: () => {
    this.lastTime = null;
    const callbasks = [this.check.bind(this, "seconds", "minutes", 59), this.check.bind(this, "minutes", "hours", 59)];
    this.start(new Date().getTime(), callbasks);
  },
  methods: {
    start(timestamp, callbasks) {
      requestAnimationFrame(this.countTime.bind(this, timestamp, callbasks));
    },
    check(prop1, prop2, limit) {
      if (this[prop1] >= limit) {
        this[prop1] = 0;
        this[prop2]++;
      }
    },
    countTime(timestamp, callbasks) {
      this.lastTime = this.lastTime || timestamp;
      const tickInterval = timestamp - this.lastTime;
      if (tickInterval >= 1000) {
        this.seconds++;
        this.lastTime = timestamp;
        for (let callback of callbasks) {
          callback();
        }
      }
      requestAnimationFrame(this.countTime.bind(this, new Date().getTime(), callbasks));
    },
    formatNum(num) {
      return num < 10 ? `0${num}` : num;
    },
  },
};
