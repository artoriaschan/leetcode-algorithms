function create() {
  // 创建一个空对象
  let obj = {};
  // 获取构造函数
  let Con = [].shift.call(arguments);
  // 设置空对象的原型
  // eslint-disable-next-line no-proto
  obj.__proto__ = Con.prototype;
  // 绑定 this 并执行构造函数
  let result = Con.apply(obj, arguments);
  // 确保返回值为对象
  return result instanceof Object ? result : obj;
}
