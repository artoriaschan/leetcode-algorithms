let count = 1;
function setCount() {
  count += 1;
}

setTimeout(() => {
  console.log("a", count);
});

module.exports = {
  count,
  setCount,
};
