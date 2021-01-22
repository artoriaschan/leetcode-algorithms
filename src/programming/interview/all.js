function all(promises) {
  const result = [];
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then(res => {
          result.push(res);
          if (i === promises.length - 1) {
            resolve(result);
          }
        })
        .catch(err => reject(err));
    }
  });
}

const promises = [];
promises.push(new Promise((resolve, reject) => resolve(1)));
promises.push(new Promise((resolve, reject) => resolve(2)));
promises.push(new Promise((resolve, reject) => reject(new Error("error"))));

all(promises)
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  });
