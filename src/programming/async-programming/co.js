function co(gen) {
  function next(ret) {
    if (ret.done) return ret.value;
    next(gen.next());
  }
  next(gen.next());
}

// test
function* getResult() {
  for (let i = 1; i <= 3; i++) {
    let x = yield `再等一下，i = ${i}`;
    console.log(`再等一下，i = ${i}`);
  }
  console.log(`终于执行完了！`);
}
co(getResult());
