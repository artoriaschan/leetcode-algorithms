/* eslint-disable no-new-wrappers */
/* eslint-disable no-extend-native */
Function.prototype.myCall = function(context) {
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }
  context = context || window;
  context.fn = this;
  const args = [...arguments].slice(1);
  const result = context.fn(...args);
  delete context.fn;
  return result;
};

function isObject(value) {
  return value !== null && (typeof value === "object" || typeof value === "function");
}

function createWrapperObject(value) {
  const type = typeof value;
  switch (type) {
    case "number":
      return new Number(value);
    case "string":
      return new String(value);
    case "boolean":
      return new Boolean(value);
    default:
      return null;
  }
}

function call(fn, context, ...args) {
  let wrapper = null;
  if (!isObject(context)) {
    wrapper = createWrapperObject(context);
  } else {
    wrapper = context;
  }
  if (wrapper === null) {
    throw new TypeError(`the ${typeof context} can't be a wrapper object!`);
  }
  const oldFn = wrapper.fn;
  wrapper.fn = fn;
  try {
    return wrapper.fn(...args);
    // eslint-disable-next-line no-useless-catch
  } catch (err) {
    throw err;
  } finally {
    if (oldFn) {
      wrapper.fn = oldFn;
    } else {
      delete wrapper.fn;
    }
  }
}

// test
function test(name) {
  console.log(this, name);
}
const res = call(Object.prototype.toString, Symbol("foo"));
console.log(res);
