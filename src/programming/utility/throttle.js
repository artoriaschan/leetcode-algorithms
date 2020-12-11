function throttle(fn, wait) {
  let lastTime = 0;
  return function() {
    const context = this;
    const args = arguments;

    const timestamp = Date.now();

    if (timestamp - lastTime >= wait) {
      lastTime = timestamp;
      return fn.apply(context, args);
    }
  };
}

// test
function sayHello() {
  console.log("hello");
}

const fn = throttle(sayHello, 500);
fn();
setTimeout(() => {
  fn();
}, 400);
setTimeout(() => {
  fn();
}, 600);
