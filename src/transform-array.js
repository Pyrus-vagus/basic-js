const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("not array");
  }
  console.log(arr);
  const newArr = arr.map((i) => i);
  for (let i = 0; i < newArr.length; i++) {
    switch (newArr[i]) {
      case "--discard-next":
        i !== newArr.length - 1
          ? newArr[i + 2] === "--discard-prev" ||
            newArr[i + 2] === "--double-prev"
            ? newArr.splice(i, 3)
            : newArr.splice(i, 2)
          : newArr.splice(i, 1);
        i--;
        break;
      case "--discard-prev":
        i !== 0 ? newArr.splice(i - 1, 2) : newArr.splice(i, 1);
        i--;
        break;
      case "--double-next":
        i !== newArr.length - 1
          ? newArr.splice(i, 1, newArr[i + 1])
          : newArr.splice(i, 1);
        break;
      case "--double-prev":
        i !== 0 ? newArr.splice(i, 1, newArr[i - 1]) : newArr.splice(i, 1);
        break;
    }
  }
  return newArr;
};
