/**
 * @param {number} num
 * @return {string}
 */
function repeat(n, str) {
  return new Array(n + 1).join(str);
}
function digToRoman(dig, higher, high, low) {
  let romanNumStr = "";
  if (dig) {
    switch (dig) {
      case 1:
      case 2:
      case 3:
        romanNumStr += repeat(dig, low);
        break;
      case 4:
        romanNumStr += `${low}${high}`;
        break;
      case 5:
      case 6:
      case 7:
      case 8:
        romanNumStr += high + repeat(dig - 5, low);
        break;
      case 9:
        romanNumStr += `${low}${higher}`;
        break;
    }
  }
  return romanNumStr;
}
var intToRoman = function(num) {
  if (num < 1 || num > 3999) return "";

  let dig_1 = parseInt(num / 1) % 10;
  let dig_2 = parseInt(num / 10) % 10;
  let dig_3 = parseInt(num / 100) % 10;
  let dig_4 = parseInt(num / 1000) % 10;

  let romanNumStr = "";
  if (dig_4) {
    romanNumStr += repeat(dig_4, "M");
  }
  if (dig_3) {
    romanNumStr += digToRoman(dig_3, "M", "D", "C");
  }
  if (dig_2) {
    romanNumStr += digToRoman(dig_2, "C", "L", "X");
  }
  if (dig_1) {
    romanNumStr += digToRoman(dig_1, "X", "V", "I");
  }
  return romanNumStr;
};

console.log(intToRoman(3566));
