/* eslint-disable no-extend-native */
Function.prototype.myBind = function(context) {
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }
  const _this = this;
  const args = [...arguments].slice(1);
  // 返回一个函数
  return function F() {
    // 因为返回了一个函数，我们可以 new F()，所以需要判断
    if (this instanceof F) {
      return new _this(...args, ...arguments);
    }
    return _this.apply(context, args.concat(...arguments));
  };
};

function bind(fn, context, ...arg) {
  return function(...otherArg) {
    const args = arg.concat(otherArg);
    return fn.apply(context, args);
  };
}

// test
function test(firstname, lastname) {
  console.log(this.word, firstname, lastname);
}
const context = {
  word: "hello",
};
const fn = bind(test, context, "Tom");
fn("Jerry");
