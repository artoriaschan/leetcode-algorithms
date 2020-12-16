function compose(middleware) {
  if (!Array.isArray(middleware)) throw new TypeError("Middleware stack must be an array!");
  for (const fn of middleware) {
    if (typeof fn !== "function") throw new TypeError("Middleware must be composed of functions!");
  }

  /**
   * @param {Object} context
   * @return {Promise}
   * @api public
   */

  return function(context, next) {
    let index = -1;
    function dispatch(i) {
      if (i <= index) return Promise.reject(new Error("next() called multiple times"));
      index = i;
      let fn = middleware[i];
      if (i === middleware.length) fn = next;
      if (!fn) return Promise.resolve();
      try {
        return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
      } catch (err) {
        return Promise.reject(err);
      }
    }
    return dispatch(0);
  };
}
const middlewares = [];
async function middleware1(context, next) {
  console.log(1);
  await next();
  console.log(2);
}
middlewares.push(middleware1);
async function middleware2(context, next) {
  console.log(3);
  await next();
  console.log(4);
}
middlewares.push(middleware2);
async function middleware3(context, next) {
  console.log(5);
  await next();
  console.log(6);
}
middlewares.push(middleware3);

const fn = compose(middlewares);

fn(null, () => {
  console.log("end");
});

// test
Promise.resolve(
  (async () => {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve(1);
      }, 1000);
    });
    const res = await promise;
    return res;
  })()
).then(res => {
  console.log("Promise.then", res);
});
