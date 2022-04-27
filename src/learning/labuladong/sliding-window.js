// function dailyTemperatures(T) {
//   const ans = [];
//   const stack = [];
//   for (let i = T.length - 1; i >= 0; i--) {
//     while (stack.length && T[stack[stack.length - 1]] <= T[i]) {
//       stack.pop();
//     }
//     ans[i] = stack.length ? stack[stack.length - 1] - i : 0;
//     stack.push(i);
//   }
//   return ans;
// }

// const { resolve } = require("../../programming/polyfill/Promise");

// const T = [73, 74, 75, 71, 69, 72, 76, 73];
// console.log(dailyTemperatures(T));

// function nextGreaterElements(nums) {
//   const n = nums.length;
//   const ans = [];
//   const s = [];
//   for (let i = 2 * n - 1; i >= 0; i--) {
//     while (s.length && s[s.length - 1] <= nums[i % n]) {
//       s.pop();
//     }
//     ans[i % n] = s.length ? s[s.length - 1] : -1;
//     s.push(nums[i % n]);
//   }
//   return ans;
// }

// const nums = [2, 1, 2, 4, 3];
// console.log(nextGreaterElements(nums));

// class MonotonicQueue {
//   queue = [];

//   push(n) {
//     while (this.queue.length && this.queue[this.queue.length - 1] < n) {
//       this.queue.pop();
//     }
//     this.queue.push(n);
//   }

//   max() {
//     return this.queue[0];
//   }

//   pop(n) {
//     if (n === this.queue[0]) {
//       this.queue.shift();
//     }
//   }
// }
// function maxSlidingWindow(nums, k) {
//   const window = new MonotonicQueue();
//   const ans = [];

//   for (let i = 0; i < nums.length; i++) {
//     if (i < k - 1) {
//       window.push(nums[i]);
//     } else {
//       window.push(nums[i]);
//       ans.push(window.max());
//       window.pop(nums[i - k + 1]);
//     }
//   }

//   return ans;
// }

// const nums = [1, 3, -1, -3, 5, 3, 6, 7];
// const k = 3;
// console.log(maxSlidingWindow(nums, k));
// 子集
// function subsets(nums) {
//   const res = [];
//   const track = [];
//   backtrack(nums, 0, track, res);
//   return res;
// }

// function backtrack(nums, start, track, res) {
//   res.push(track);
//   for (let i = start; i < nums.length; i++) {
//     track.push(nums[i]);
//     backtrack(nums, i + 1, track.slice(), res);
//     track.pop();
//   }
// }

// const nums = [1, 2, 3];
// console.log(subsets(nums));
// 组合
// function combine(n, k) {
//   const res = [];
//   const track = [];
//   backtrack(n, k, 1, track, res);
//   return res;
// }

// function backtrack(n, k, start, track, res) {
//   if (k === track.length) {
//     res.push(track);
//     return;
//   }
//   for (let i = start; i <= n; i++) {
//     track.push(i);
//     backtrack(n, k, i + 1, track.slice(), res);
//     track.pop();
//   }
// }

// console.log(combine(4, 2));
// 排列
// function permute(nums) {
//   const res = [];
//   const track = [];
//   backtrack(nums, track, res);
//   return res;
// }

// function backtrack(nums, track, res) {
//   if (track.length === nums.length) {
//     res.push(track);
//     return;
//   }
//   for (let i = 0; i < nums.length; i++) {
//     if (track.includes(nums[i])) {
//       continue;
//     }
//     track.push(nums[i]);
//     backtrack(nums, track.slice(), res);
//     track.pop();
//   }
// }

// const nums = [1, 2, 3];
// console.log(permute(nums));
// let tree = {
//   val: 1,
//   left: {
//     val: 2,
//     left: {
//       val: 4,
//       left: null,
//       right: null,
//     },
//     right: {
//       val: 5,
//       left: null,
//       right: null,
//     },
//   },
//   right: {
//     val: 3,
//     left: null,
//     right: null,
//   },
// };
// const dfs = (root, cur, res) => {
//   if (!root) return;
//   cur += root.val;
//   if (!root.left && !root.right) {
//     res.push(cur);
//     return;
//   }
//   dfs(root.left, cur, res);
//   dfs(root.right, cur, res);
// };

// const sumNumbers = root => {
//   const res = [];
//   dfs(root, "", res);
//   return res.reduce((pre, cur) => +pre + +cur, 0);
// };
// console.log(sumNumbers(tree));

// const obj = {
//   a: {
//     b: {
//       c: { f: "aa" },
//     },
//     d: {
//       e: { g: "bb" },
//       h: { i: "cc" },
//     },
//     j: {
//       k: "dd",
//     },
//   },
// };
// // [f,g,i,c,e,h,k,b,d,j,a]

// const isObject = obj => Object.prototype.toString.call(obj) === "[object Object]";
// // 层次遍历
// function serializeProperties(obj) {
//   const props = Object.keys(obj);
//   if (!props.length) return [];
//   const res = [];
//   const queue = [];
//   queue.push(obj);
//   while (queue.length) {
//     const level = [];
//     const len = queue.length;
//     for (let i = 0; i < len; i++) {
//       const cur = queue.shift();
//       const curProps = Object.keys(cur);
//       for (const prop of curProps) {
//         level.push(prop);
//         if (isObject(cur[prop])) {
//           queue.push(cur[prop]);
//         }
//       }
//     }
//     res.unshift(...level);
//   }
//   return res;
// }

// console.log(serializeProperties(obj));

// const microTask = (delay, id) =>
//   new Promise(resolve => {
//     setTimeout(() => {
//       console.log(id);
//       resolve();
//     }, delay);
//   });

// class Scheduler {
//   constructor(limit = 2) {
//     this.limit = limit;
//     this.queue = []; // 模拟队列，先进先出
//     this.processTasks = [];
//   }

//   addTask(task) {
//     this.queue.push(task);
//     this.run();
//   }

//   run() {
//     while (this.processTasks.length < this.limit && this.queue.length > 0) {
//       const task = this.queue.shift();
//       const promise = task().then(() => {
//         this.processTasks.splice(this.processTasks.indexOf(promise), 1);
//         this.run();
//       });
//       this.processTasks.push(promise);
//     }
//   }
// }

// const scheduler = new Scheduler(2);
// scheduler.addTask(() => microTask(1000, 1));
// scheduler.addTask(() => microTask(500, 2));
// scheduler.addTask(() => microTask(300, 3));
// scheduler.addTask(() => microTask(400, 4));
// // 输出 2 3 1 4

// function promiseAll(promises) {
//   return new Promise((resolve, reject) => {
//     const result = [];
//     for (let i = 0; i < promises.length; i++) {
//       const promise = promises[i];
//       Promise.resolve(promise).then(
//         res => {
//           result.push(res);
//           if (i === promises.length - 1) {
//             resolve(result);
//           }
//         },
//         error => {
//           reject(error);
//         }
//       );
//     }
//   });
// }

// const p1 = Promise.resolve(1);
// const p2 = Promise.resolve(2);
// const p3 = Promise.resolve(3);
// promiseAll([p1, p2, p3, 4]).then(res => {
//   console.log(res);
// });

// function lowestCommonAncestor(root, p, q) {
//   if (!root) return null;
//   if (root === p || root === q) return root;

//   const left = lowestCommonAncestor(root.left, p, q);
//   const right = lowestCommonAncestor(root.right, p, q);

//   if (left !== null && right !== null) {
//     return root;
//   }
//   if (left === null && right === null) {
//     return null;
//   }
//   return left === null ? right : left;
// }

// function fetchWithRetry(url, init, times = 3, delay = 1000) {
//   return new Promise((resolve, reject) => {
//     function retry(attempt) {
//       setTimeout(() => {
//         wrappedFetch(++attempt);
//       }, delay);
//     }
//     function wrappedFetch(attempt) {
//       fetch(url, init)
//         .then(response => {
//           resolve(response);
//         })
//         .catch(error => {
//           if (attempt < times) {
//             retry(attempt);
//           } else {
//             reject(error);
//           }
//         });
//     }
//     wrappedFetch(0);
//   });
// }

// fetchWithRetry("https://www.google.com.hk", { method: "GET" })
//   .then(res => res.text())
//   .then(text => console.log(text))
//   .catch(error => console.log(error));

// function detectCycle(head) {
//   let fast = head;
//   let slow = head;
//   while (fast !== null && fast.next !== null) {
//     fast = fast.next.next;
//     slow = slow.next;
//     if (fast === slow) break;
//   }
//   slow = head;
//   while (slow !== fast) {
//     fast = fast.next;
//     slow = slow.next;
//   }
//   return slow;
// }

// function getLeastNumbers(arr, k) {
//   if (k === 0 || arr.length === 0) {
//     return [];
//   }
//   return quickSearch(arr, 0, arr.length - 1, k);
// }
// function quickSearch(arr, lo, hi, k) {
//   const mi = partition(arr, lo, hi);
//   if (mi === k - 1) {
//     return arr.slice(0, k);
//   }
//   return mi > k - 1 ? quickSearch(arr, lo, mi - 1, k) : quickSearch(arr, mi + 1, hi, k);
// }
// function partition(arr, lo, hi) {
//   let pivot = arr[lo];
//   while (lo < hi) {
//     while (lo < hi && pivot <= arr[hi]) hi--;
//     arr[lo] = arr[hi];
//     while (lo < hi && arr[lo] <= pivot) lo++;
//     arr[hi] = arr[lo];
//   }
//   arr[lo] = pivot;
//   return lo;
// }

// function create(constructor) {
//   let obj = {};
//   let Con = [].shift.call(arguments);
//   // 设置空对象的原型
//   // eslint-disable-next-line no-proto
//   obj.__proto__ = Con.prototype;
//   // 绑定 this 并执行构造函数
//   let result = Con.apply(obj, arguments);
//   // 确保返回值为对象
//   return result instanceof Object ? result : obj;
// }

// function minDepth(root) {
//   if (root === null) return 0;
//   const queue = [];
//   queue.push(root);
//   let depth = 1;
//   while (queue.length) {
//     const len = queue.length;
//     for (let i = 0; i < len; i++) {
//       const node = queue.shift();
//       if (node.left === null && node.right === null) {
//         return depth;
//       }
//       if (node.left) queue.push(node.left);
//       if (node.right) queue.push(node.right);
//     }
//     depth += 1;
//   }
//   return depth;
// }

// function validPalindrome(s) {
//   const wordReg = /[a-zA-Z1-9]/;
//   let start = 0;
//   let end = s.length - 1;
//   while (start < end) {
//     while (!wordReg.test(s[start]) && start <= end) start++;
//     while (!wordReg.test(s[end]) && start <= end) end--;
//     if (s[start].toLowerCase() !== s[end].toLowerCase()) {
//       return false;
//     }
//     start++;
//     end--;
//   }
//   return true;
// }
// const s = "nowcoder Is Best tsebsi: redoc won";
// console.log(validPalindrome(s));

// class Queue {
//   constructor() {
//     this.inStack = [];
//     this.outStack = [];
//   }

//   push(item) {
//     this.inStack.push(item);
//   }

//   shift() {
//     if (this.outStack.length) {
//       return this.outStack.pop();
//     }
//     const len = this.inStack.length;
//     for (let i = 0; i < len; i++) {
//       const item = this.inStack.pop();
//       this.outStack.push(item);
//     }
//     return this.outStack.pop();
//   }
// }

// const queue = new Queue();
// queue.push(1);
// queue.push(2);
// console.log(queue.shift());
// queue.push(3);
// queue.push(4);
// console.log(queue.shift());
// queue.push(5);
// queue.push(6);

// console.log(queue.shift());
// console.log(queue.shift());
// console.log(queue.shift());
// console.log(queue.shift());

// function isSymmetric(root) {
//   return isMirror(root, root);
// }
// function isMirror(left, right) {
//   if (left === null && right === null) return true;
//   if (left === null || right === null) return false;
//   return left.val === right.val && isMirror(left.left, right.right) && isMirror(left.right, right.left);
// }

// function map(arr, fn) {
//   const res = [];
//   let index = 0;
//   arr.reduce((_, cur) => {
//     const item = fn(cur, index, arr);
//     res.push(item);
//     index += 1;
//     return null;
//   }, null);
//   return res;
// }

// const arr = [1, 2, 3, 4, 5];
// console.log(
//   map(arr, (item, index, arr) => {
//     console.log(item, index, arr);
//     return item + 1;
//   })
// );

// function rightSideView(root) {
//   if (!root) return [];
//   let res = [];
//   const queue = [];
//   const depth = [];
//   queue.push(root);
//   depth.push(0);
//   while (queue.length > 0) {
//     const node = queue.shift();
//     const dep = depth.shift();
//     if (res.length === dep) {
//       res.push(node.val);
//     }
//     if (node.right) {
//       queue.push(node.right);
//       depth.push(dep + 1);
//     }
//     if (node.left) {
//       queue.push(node.left);
//       depth.push(dep + 1);
//     }
//   }
//   return res;
// }

// const obj = require("./a.js");
// obj.setCount();
// console.log("b", obj.count);
// setTimeout(() => {
//   console.log("b.next", obj.count);
// });

// setTimeout(function() {
//   console.log(1);
//   new Promise(function(resolve) {
//     resolve();
//     console.log(2);
//   }).then(() => {
//     setTimeout(() => {
//       console.log(3);
//     });
//     console.log(4);
//   });
// });

// new Promise(function(resolve) {
//   console.log(5);
//   for (let i = 0; i < 1e4; i++) {
//     i === 9999 && resolve();
//   }
//   console.log(6);
// }).then(() => {
//   console.log(7);
// });

// console.log(8);

// function getSubStr(str) {
//   if (!str) return 0;
//   let slow = 0;
//   let fast = 1;
//   // let res = 0;
//   let res = new Set();
//   const len = str.length;
//   while (fast < len) {
//     const cur = str[slow];
//     const next = str[fast];
//     if (cur === next) {
//       fast += 1;
//     } else {
//       if (fast - slow > 1) {
//         const substr = str.slice(slow, fast);
//         console.log(substr);
//         // res += 1;
//         res.add(substr);
//       }
//       slow = fast;
//       fast += 1;
//     }
//   }
//   if (fast - slow > 1) {
//     const substr = str.slice(slow, fast);
//     console.log(substr);
//     // res += 1;
//     res.add(substr);
//   }
//   console.log(res);
//   return res.size;
// }

// const str = "abcdaaabbccccdddefgaaae";
// console.log(getSubStr(str));

// 算法分类
// 二叉树
// DFS BFS
// 动态规划
// 双指针
// 滑动窗口
// 回溯
// 并查集
// 快排
// 二分搜索
// 堆
// 单调队列
// 翻转链表
// 贪心

// 前缀和
// 单调栈

// function lengthOfLongestSubstring(str) {
//   const window = new Map();
//   let left = 0;
//   let right = 0;
//   let res = 0;
//   while (right < str.length) {
//     const c = str[right];
//     right++;
//     if (window.has(c)) {
//       const count = window.get(c);
//       window.set(c, count + 1);
//     } else {
//       window.set(c, 1);
//     }
//     while (window.get(c) > 1) {
//       const d = s[left];
//       left++;
//       const count = window.get(d);
//       window.set(d, count - 1);
//     }
//     res = Math.max(res, right - left);
//   }
//   return res;
// }

// function lengthOfLongestSubstring(s) {
//   let max = 0;
//   let res = "";
//   for (let i = 0; i < s.length; i++) {
//     const index = res.indexOf(s[i]);
//     if (index < 0) {
//       res += s[i];
//       max = Math.max(max, res.length);
//     } else {
//       res = res.slice(index + 1);
//       res += s[i];
//       max = Math.max(max, res.length);
//     }
//   }
//   return max;
// }
// const s = "abcabcbb";
// console.log(lengthOfLongestSubstring(s));

// const axios = url => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(url);
//     }, 1000);
//   });
// };

// function concurrence(urls, maxNum) {
//   let i = 0;
//   let ret = [];
//   const executing = new Set();
//   const enqueue = () => {
//     if (urls.length === i) return Promise.resolve();
//     const url = urls[i++];
//     console.log(url, "开始");
//     const p = Promise.resolve(axios(url));
//     ret.push(p);
//     executing.add(p);
//     const clean = () => {
//       executing.delete(p);
//       console.log(url, "结束");
//     };
//     p.then(clean).catch(clean);

//     let r = Promise.resolve();
//     if (executing.size >= maxNum) {
//       r = Promise.race(executing);
//     }
//     return r.then(() => enqueue());
//   };
//   return enqueue().then(() => Promise.all(ret));
// }

// concurrence(["/url1", "/url2", "/url3", "/url4", "/url5", "/url6", "/url7", "/url8"], 5).then(data => {
//   console.log(data);
// });

// function concurrence(promises) {
//   const p = promises.reduce((prev, cur) => {
//     return prev.then(() => cur());
//   }, Promise.resolve());
//   return p;
// }

// const p1 = () =>
//   new Promise(resolve => {
//     setTimeout(() => {
//       console.log(1);
//       resolve(1);
//     }, 1000);
//   });
// const p2 = () =>
//   new Promise(resolve => {
//     setTimeout(res => {
//       console.log(2);
//       resolve(2);
//     }, 1000);
//   });
// const p3 = () =>
//   new Promise(resolve => {
//     setTimeout(() => {
//       console.log(3);
//       resolve(3);
//     }, 1000);
//   });

// concurrence([p1, p2, p3]).then(res => {
//   // console.log(res);
// });

// function quickSort(arr, lo, hi) {
//   lo = lo !== undefined ? lo : 0;
//   hi = hi !== undefined ? hi : arr.length - 1;
//   if (hi - lo < 1) return;
//   const mi = partition(arr, lo, hi);
//   quickSort(arr, lo, mi - 1);
//   quickSort(arr, mi + 1, hi);
// }

// function partition(arr, lo, hi) {
//   const pivot = arr[lo];
//   while (lo < hi) {
//     while (lo < hi && pivot <= arr[hi]) hi--;
//     arr[lo] = arr[hi];
//     while (lo < hi && pivot >= arr[lo]) lo++;
//     arr[hi] = arr[lo];
//   }
//   arr[lo] = pivot;
//   return lo;
// }

// const arr = [2, 1, 5, 8, 4, 7, 3, 6];
// quickSort(arr);
// console.log(arr);

// let p = new Promise((resolve, reject) => {
//   resolve();
//   console.log(1);
//   reject();
// });

// p.then(() => console.log(2))
//   .catch(() => console.log(3))
//   .finally(() => console.log(4));

// Function.prototype.a = () => console.log(1);
// Object.prototype.b = () => console.log(2);
// function A() {}
// const a = new A();
// A.b();
// A.a();
// a.b();
// a.a();

// Promise.resolve(1)
//   .then(2)
//   .then(Promise.resolve(3))
//   .then(console.log);

// function fetchWithAbort(fetchPromise) {
//   let abort = null;
//   const abortPromise = new Promise((resolve, reject) => {
//     abort = () => {
//       reject(new Error("abort"));
//       console.log("=== fetchWithAbort abort ===");
//     };
//   });
//   let promiseWithAbort = Promise.race([fetchPromise, abortPromise]);
//   promiseWithAbort.abort = abort;
//   return promiseWithAbort;
// }

// const p = fetchWithAbort(
//   new Promise(resolve => {
//     setTimeout(() => {
//       console.log("请求完成");
//       resolve();
//     }, 1000);
//   })
// );

// setTimeout(() => {
//   p.abort();
// }, 500);

// function wrapCachedFetch(fetcher, symbol) {
//   const cache = new Map();
//   return function(params) {
//     return new Promise((resolve, reject) => {
//       let cacheEntity = cache.get(symbol);
//       if (cacheEntity) {
//         if (cacheEntity.res) {
//           return resolve(cacheEntity.res);
//         }
//         cacheEntity.executor.push({ resolve, reject });
//       } else {
//         cacheEntity = {
//           res: null,
//           executor: [{ resolve, reject }],
//         };
//         cache.set(symbol, cacheEntity);
//       }

//       const { executor } = cacheEntity;
//       if (executor.length === 1) {
//         const next = async () => {
//           try {
//             if (!executor.length) return;
//             const response = await fetcher(params);
//             while (executor.length) {
//               const item = executor.shift();
//               item?.resolve(response);
//             }
//             cacheEntity.res = response;
//           } catch (error) {
//             const item = executor.shift();
//             item?.reject(error);
//             next();
//           }
//         };
//         next();
//       }
//     });
//   };
// }

// async function fetchData(a) {
//   const data = await fetch("//juejin.cn/");
//   const d = await data.text();
//   return d;
// }

// const cachedFetch = wrapCachedFetch(fetchData, "test2");
// cachedFetch(1).then(res => console.log(res));
// cachedFetch(2).then(res => console.log(res));
// cachedFetch(3).then(res => console.log(res));
// cachedFetch(4).then(res => console.log(res));
// cachedFetch(5).then(res => console.log(res));
// cachedFetch(6).then(res => console.log(res));

// function asyncAdd(a, b, cb) {
//   setTimeout(() => {
//     cb(null, a + b);
//   }, 100);
// }

// function sum(...nums) {
//   const results = [...nums];
//   const executing = new Set();

//   const next = results => {
//     const len = results.length;
//     for (let i = 0; i < len - 1; i += 2) {
//       const prev = results.pop();
//       const curr = results.pop();
//       const p = new Promise((resolve, reject) => {
//         asyncAdd(prev, curr, (error, result) => {
//           if (!error) {
//             resolve(result);
//           } else {
//             reject(error);
//           }
//         });
//       });
//       executing.add(p);
//       const clean = () => {
//         executing.delete(p);
//       };
//       p.then(clean).catch(clean);
//     }
//     if (executing.size) {
//       const r = Promise.race(Array.from(executing)).then(result => {
//         results.push(result);
//       });
//       return r.then(() => next(results));
//     }
//     return Promise.resolve(results[0]);
//   };

//   return next(results);
// }
// sum(3, 4, 9, 2, 5, 3, 2, 1, 7).then(result => {
//   console.log("sum", result);
// });

// function promiseAsyncAdd(a, b) {
//   if (a === 0) return b;
//   return new Promise((resolve, reject) => {
//     asyncAdd(a, b, (err, res) => {
//       resolve(res);
//     });
//   });
// }

// function sum() {
//   let args = Array.from(arguments);
//   // 初始化一个 Promise, 和是 0
//   let p = Promise.resolve(0);
//   return args.reduce((acc, cur) => {
//     // 利用 promise 可链式调用
//     p = p.then(res => {
//       return promiseAsyncAdd(res, cur);
//     });
//     return p.then(res => {
//       // res 是每一轮 reduce计算的和 return出去
//       return res;
//     });
//   }, 0);
// }

// function sum(...nums) {
//   let queue = Array.from(nums);
//   let count = Math.ceil(queue.length / 2);
//   function done(resolve) {
//     while (queue.length > 1) {
//       let adds = queue.splice(0, 2);
//       asyncAdd(...adds, (err, result) => {
//         queue.push(result);
//         if (queue.length === count) {
//           if (count === 1) {
//             resolve(queue[0]);
//           } else {
//             count = Math.ceil(queue.length / 2);
//             done(resolve);
//           }
//         }
//       });
//     }
//   }
//   return new Promise(resolve => {
//     done(resolve);
//   });
// }

// const start = new Date().getTime();
// sum(3, 4, 9, 2, 5, 3, 2, 1, 7).then(result => {
//   const end = new Date().getTime();
//   console.log(end - start);
//   console.log("sum", result);
// });

// const scheduler = max => {
//   const tasks = [];
//   const executing = [];
//   function run() {
//     while (tasks.length && executing.length < max) {
//       const [task, resolve, reject] = tasks.shift();
//       const p = task().then(
//         res => {
//           const idx = executing.indexOf(p);
//           resolve(res);
//           executing.splice(idx, 1);
//           run();
//         },
//         error => {
//           reject(error);
//         }
//       );
//       executing.push(p);
//     }
//   }
//   return task => {
//     return new Promise((resolve, reject) => {
//       tasks.push([task, resolve, reject]);
//       run();
//     });
//   };
// };

// const request1 = () => new Promise(resolve => setTimeout(() => resolve(1), 4000));
// const request2 = () => new Promise(resolve => setTimeout(() => resolve(2), 1000));
// const request3 = () => new Promise(resolve => setTimeout(() => resolve(3), 2000));
// const request4 = () => new Promise(resolve => setTimeout(() => resolve(4), 1500));

// const s = scheduler(2);
// s(request1).then(res => console.log(res));
// s(request2).then(res => console.log(res));
// s(request3).then(res => console.log(res));
// s(request4).then(res => console.log(res));

// function myFilter(arr, cb) {
//   const res = [];
//   for (let i = 0; i < arr.length; i++) {
//     const item = arr[i];
//     if (cb(item, i, arr)) {
//       res.push(item);
//     }
//   }
//   return res;
// }

// const arr = [1, 2, 3, 4, 5, 6];
// console.log(arr.filter(item => item % 2 === 0));
// console.log(myFilter(arr, item => item % 2 === 0));

// function thousandSeparator(num) {
//   // 正则表达式
//   // return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//   // 字符串拼接
//   num = (num || 0).toString();
//   let result = "";
//   while (num.length > 3) {
//     result = "," + num.slice(-3) + result;
//     num = num.slice(0, num.length - 3);
//   }
//   if (num !== "") {
//     result = num + result;
//   }
//   return result;
// }

// console.log(thousandSeparator(123456789));

// function compareVersion(version1, version2) {
//   const v1 = version1.split(".");
//   const v2 = version2.split(".");
//   const len = Math.max(v1.length, v2.length);
//   for (let i = 0; i < len; i++) {
//     const n1 = parseInt(v1[i] || 0, 10);
//     const n2 = parseInt(v2[i] || 0, 10);
//     if (n1 > n2) {
//       return 1;
//     }
//     if (n1 < n2) {
//       return -1;
//     }
//   }
//   return 0;
// }

// console.log(compareVersion("1.0.2502", "1.0.2501"));

// function lengthOfLongestSubstring(s) {
//   const window = new Map();
//   let max = 0;
//   let start = 0;
//   for (let i = 0; i < s.length; i++) {
//     const c = s[i];
//     if (window.has(c)) {
//       start = Math.max(start, window.get(c) + 1);
//     }
//     window.set(c, i);
//     max = Math.max(max, i - start + 1);
//   }
//   return max;
// }

// const s = "abcabcbb";
// console.log(lengthOfLongestSubstring(s));

// function compose(middleware) {
//   if (!Array.isArray(middleware)) throw new TypeError("Middleware stack must be an array!");

//   for (const fn of middleware) {
//     if (typeof fn !== "function") throw new TypeError("Middleware must be composed of functions!");
//   }

//   return function(context, next) {
//     let index = -1;
//     return dispatch(0);
//     function dispatch(i) {
//       if (i <= index) return Promise.reject(new Error("next() called multiple times"));
//       index = i;
//       let fn = middleware[i];
//       if (i === middleware.length) fn = next;
//       if (!fn) return Promise.resolve();
//       try {
//         return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
//       } catch (err) {
//         return Promise.reject(err);
//       }
//     }
//   };
// }

// const m1 = async (ctx, next) => {
//   console.log("m1 before");
//   await next();
//   console.log("m1 after");
// };
// const m2 = async (ctx, next) => {
//   console.log("m2 before");
//   await next();
//   console.log("m2 after");
// };
// const m3 = async (ctx, next) => {
//   console.log("m3 before");
//   await next();
//   console.log("m3 after");
// };

// const fn = compose([m1, m2, m3]);
// fn({}, () => {
//   console.log("next");
// }).then(() => {
//   console.log("respond");
// });

// function restoreIpAddresses(s) {
//   const res = [];
//   backtrack(s, 0, [], res);
//   return res;
// }

// function backtrack(s, start, temp, res) {
//   if (temp.length === 4 && start === s.length) {
//     res.push(temp.join("."));
//     return;
//   }
//   if (temp.length === 4 && start < s.length) return;
//   // 依次获取三位数字
//   for (let i = 1; i <= 3; i++) {
//     // 长度越界 直接返回
//     if (start + i > s.length) break;
//     const num = s.substring(start, start + i);
//     // 多位数不允许有前导0
//     if (num.length > 1 && num[0] === "0") return;
//     // 数字范围不能超过255
//     if (i === 3 && parseInt(num, 10) > 255) return;
//     temp.push(num);
//     backtrack(s, start + i, temp.slice(), res);
//     temp.pop();
//   }
// }

// const s = "101023";
// console.log(restoreIpAddresses(s));

// function flat(arr, depth = Number.MAX_SAFE_INTEGER) {
//   return depth > 0
//     ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flat(val, depth - 1) : val), [])
//     : arr.slice();
// }

// const arr = [1, 2, [3, [4, 5]], [6], [7, [8], 9]];
// console.log(flat(arr, 1));

// function lengthOfLongestSubstring(s) {
//   let max = 0;
//   let window = new Map();
//   let start = 0;
//   for (let i = 0; i < s.length; i++) {
//     const c = s[i];
//     if (window.has(c)) {
//       start = Math.max(start, window.get(c) + 1);
//     }
//     window.set(c, i);
//     max = Math.max(max, i - start + 1);
//   }
//   return max;
// }

// const s = "nfpdmpi";
// console.log(lengthOfLongestSubstring(s));

// function singleNumber(arr) {
//   let ans = 0;
//   for (const num of arr) {
//     ans ^= num;
//   }
//   return ans;
// }

// const arr = [1, 2, 1, 1, 1, 1, 1, 1, 1];
// console.log(singleNumber(arr));

// function merge(target, other) {
//   if (!other.length) return;
//   if (!target.length) {
//     for (let item of other) {
//       target.push(item);
//     }
//     return;
//   }
//   let x = target.length - 1;
//   let y = other.length - 1;
//   let totalLen = target.length + other.length - 1;
//   while (x >= 0 && y >= 0) {
//     if (target[x] < other[y]) {
//       target[totalLen] = other[y];
//       y--;
//       totalLen--;
//     } else {
//       [target[x], target[totalLen]] = [target[totalLen], target[x]];
//       x--;
//       totalLen--;
//     }
//   }
//   for (; y >= 0; y--) {
//     target[y] = other[y];
//   }
// }

// const arr1 = [6, 7, 8, 22, 51, 67, 77, 79];
// const arr2 = [1, 2, 3, 11, 23, 68, 78];
// merge(arr1, arr2);
// console.log(arr1);

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
    return node ?? null;
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
