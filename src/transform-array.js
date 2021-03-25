const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("not array");
  } else {
    const i = arr.map((i) => i);
    arr.map((item) => {
      item === "--discard-next"
        ? i.splice(i.indexOf("--discard-next") + 1, 2)
        : item === "--discard-prev"
        ? i.splice(i.indexOf("--discard-prev") - 1, 2)
        : item === "--double-next"
        ? (i[i.indexOf(item)] = i[i.indexOf(item) + 1])
        : item === "--double-prev"
        ? (i[i.indexOf(item)] = i[i.indexOf(item) - 1])
        : item;
    });
    return i;
  }
};
