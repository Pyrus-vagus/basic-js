const { FakeXMLHttpRequest } = require("sinon");
const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (
    +sampleActivity > 15 ||
    +sampleActivity < 0 ||
    sampleActivity === "Infinity" ||
    +sampleActivity === Number.NEGATIVE_INFINITY ||
    typeof sampleActivity !== "string" ||
    isNaN(sampleActivity)
  ) {
    return false;
  } else {
    const a = MODERN_ACTIVITY / +sampleActivity;
    const k = 0.693 / HALF_LIFE_PERIOD;
    const time = Math.log(a) / k;
    return Math.ceil(time);
  }
};
