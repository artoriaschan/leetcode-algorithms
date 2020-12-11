/* eslint-disable func-names */
function debounce(fn, wait) {
  let timer = null;
  return function() {
    const context = this;
    const args = arguments;

    if (timer) clearTimeout(timer);
    timer = setTimeout(function() {
      fn.apply(context, args);
    }, wait);
  };
}

// test
function sayHello() {
  console.log("hello");
}

const fn = debounce(sayHello, 1000);
fn();
console.log("还没执行");
setTimeout(() => {
  console.log("还没执行");
  fn();
}, 500);
