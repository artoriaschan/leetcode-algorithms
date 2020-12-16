/**
 * 只输出最后一个promsie的结果
 */
function lastPromise(promiseFunction) {
  const arrs = [];
  function fn() {
    arrs.push(promiseFunction);
    return {
      then,
    };
  }

  let target;
  function then(fnc) {
    clearTimeout(target);
    target = setTimeout(() => {
      arrs.forEach((promise, index) => {
        promise().then(res => {
          if (arrs.length - 1 === index) {
            fnc(res);
          }
        });
      });
    });
  }

  return fn;
}

let count = 1;
let promiseFunction = () => {
  return new Promise(resolve =>
    setTimeout(() => {
      resolve(count++);
    })
  );
};

const fn = lastPromise(promiseFunction);

fn().then(res => console.log(res));
fn().then(res => console.log(res));
fn().then(res => console.log(res));
