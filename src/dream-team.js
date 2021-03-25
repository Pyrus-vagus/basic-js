const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  return Array.isArray(members)
    ? members
        .map((i) =>
          typeof i === "string"
            ? i.replace(/\s/g, "").split("").shift().toUpperCase()
            : ""
        )
        .sort()
        .join("")
    : false;
};
