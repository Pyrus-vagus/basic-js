const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("not array");
  }
  const finalArray = [];
};
