const { captureStackTrace } = require("../extensions/custom-error");
const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let arrDepth = 1;
    arr.forEach((i) => {
      if (Array.isArray(i)) {
        const aquiredDepth = this.calculateDepth(i) + 1;
        if (arrDepth < aquiredDepth) {
          arrDepth = aquiredDepth;
        }
      }
    });
    return arrDepth;
  }
};
