const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const {
    repeatTimes = 1,
    separator = "+",
    addition = "",
    additionRepeatTimes = 1,
    additionSeparator = "|",
  } = options;
  const string = [];
  const addit = [];
  for (let i = 0; i < additionRepeatTimes; i++) {
    addit.push(`${addition}`);
  }
  const add = addit.join(additionSeparator);
  for (let i = 0; i < repeatTimes; i++) {
    string.push(str + add);
  }
  return string.join(separator);
};
