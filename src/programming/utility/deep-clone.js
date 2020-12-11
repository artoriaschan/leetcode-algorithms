const toString = Object.prototype.toString;
const symbolValueOf = Symbol.prototype.valueOf;

function getTag(value) {
  if (value == null) {
    return value === undefined ? "[object Undefined]" : "[object Null]";
  }
  return toString.call(value);
}

const regexpTag = "[object RegExp]";
const symbolTag = "[object Symbol]";

function isObject(value) {
  const type = typeof value;
  return value != null && (type === "object" || type === "function");
}
function isRegExp(value) {
  return getTag(value) === regexpTag;
}
function isSymbol(value) {
  return getTag(value) === symbolTag;
}
function isFunction(value) {
  return typeof value === "function";
}

function cloneRegExp(regexp) {
  const reFlags = /\w*$/;
  const result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

function cloneSymbol(symbol) {
  return Object(symbolValueOf.call(symbol));
}

function deepClone(source) {
  if (!isObject(source)) return source;
  // if (isSymbol(source)) return cloneSymbol(source);
  // if (isRegExp(source)) return cloneRegExp(source);
  if (isRegExp(source)) return source;
  if (isFunction(source)) return source;
  const isArray = Array.isArray(source);
  let target = isArray ? [...source] : { ...source };
  for (let key in target) {
    target[key] = isObject(target[key]) ? deepClone(target[key]) : target[key];
  }
  return target;
}

// test
let a = {
  name: "aaa",
  friends: ["bbb", "ccc"],
  address: {
    province: "shandong",
  },
  actions: {
    run: function() {
      console.log("run!");
    },
  },
  match: /^\s/g,
  school: undefined,
  id: Symbol(),
};

a.home = {
  address: a.address,
};

const copyaa = deepClone(a);

a.home.address.city = "zibo";
console.log(a);
console.log(copyaa);
