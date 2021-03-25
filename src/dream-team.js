const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  return members
    .map((i) => (typeof i === "string" ? i.split("").shift() : ""))
    .sort()
    .join("");
};
