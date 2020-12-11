function add(a, b) {
  // 取两个数字的最大长度
  let maxLength = Math.max(a.length, b.length);
  // 用0去补齐长度
  a = a.padStart(maxLength, 0);
  b = b.padStart(maxLength, 0);
  // 定义加法过程中需要用到的变量
  let t = 0;
  // "进位"
  let f = 0;
  let sum = "";
  for (let i = maxLength - 1; i >= 0; i--) {
    t = parseInt(a[i], 10) + parseInt(b[i], 10) + f;
    f = Math.floor(t / 10);
    sum = (t % 10) + sum;
  }
  if (f === 1) {
    sum = "1" + sum;
  }
  return sum;
}
// BigInt
function addWithBigInt(a, b) {
  let hugeA = BigInt(a);
  let hugeB = BigInt(b);
  let sum = hugeA + hugeB;
  return sum.toString();
}

let a = "9007199254740991";
let b = "1234567899999999999";
console.log(add(a, b)); // 结果为：1243575099254740990
console.log(addWithBigInt(a, b)); // 结果为：1243575099254740990
