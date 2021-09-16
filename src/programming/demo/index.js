// setTimeout(() => {
//   console.log(1);
// });
// new Promise((resolve, reject) => {
//   console.log(2);
//   resolve(4);
// }).then(res => {
//   console.log(res);
//   new Promise((resolve, reject) => {
//     console.log(3);
//     resolve(5);
//   }).then(res => {
//     console.log(res);
//   });
// });

const path = require("path");

console.log(path.resolve("goog"));
console.log(path.relative("/user", "/user/data"));
