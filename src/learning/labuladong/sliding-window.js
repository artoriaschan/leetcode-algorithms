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

// function fetchWithRetry(input, init, times = 3, delay = 1000) {
//   return new Promise((resolve, reject) => {
//     function wrappedFetch(attempt) {
//       function retry(attempt) {
//         setTimeout(() => {
//           wrappedFetch(++attempt);
//         }, delay);
//       }
//       fetch(input, init)
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
