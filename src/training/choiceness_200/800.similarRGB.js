/**
 * @param {string} color
 * @return {string}
 */
// eslint-disable-next-line no-unused-vars
function similarRGB(color) {
  const rgbColor = generateRGB(color);
  return `#${closestDoubleHex(rgbColor.r)}${closestDoubleHex(rgbColor.g)}${closestDoubleHex(rgbColor.b)}`;
}
function generateRGB(color) {
  let arrColor = color.split("");
  arrColor.splice(0, 1);
  const RGB = {};
  RGB.r = arrColor.splice(0, 2).join("");
  RGB.g = arrColor.splice(0, 2).join("");
  RGB.b = arrColor.splice(0, 2).join("");
  return RGB;
}
function closestDoubleHex(hex) {
  const doubleHexs = ["00", "11", "22", "33", "44", "55", "66", "77", "88", "99", "aa", "bb", "cc", "dd", "ee", "ff"];
  let min = (parseInt(hex, 16) - parseInt(doubleHexs[0], 16)) ** 2;
  let minIndex = 0;
  for (let i = 1; i < 16; i++) {
    const curr = (parseInt(hex, 16) - parseInt(doubleHexs[i], 16)) ** 2;
    if (curr < min) {
      min = curr;
      minIndex = i;
    }
  }
  return doubleHexs[minIndex];
}
