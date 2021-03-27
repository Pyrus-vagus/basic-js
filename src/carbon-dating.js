const { FakeXMLHttpRequest } = require("sinon");
const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (sampleActivity <= 0 || sampleActivity >= MODERN_ACTIVITY) return false;
  if (typeof sampleActivity !== "string") return false;
  if (isNaN(sampleActivity)) return false;
  else {
    const a = MODERN_ACTIVITY / +sampleActivity;
    const k = 0.693 / HALF_LIFE_PERIOD;
    const time = Math.log(a) / k;
    return Math.ceil(time);
  }
};
