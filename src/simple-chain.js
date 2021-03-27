const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    console.log(value);
    value !== "undefined"
      ? this.chain.push(`( ${value} )`)
      : this.chain.push(`( )`);
    return chainMaker;
  },
  removeLink(position) {
    if (position) {
      this.chain.splice(position - 1, 1);
    } else {
      this.chain = [];
      throw new Error("Position is not valid");
    }

    return chainMaker;
  },
  reverseChain() {
    this.chain.reverse();
    return chainMaker;
  },
  finishChain() {
    let a = this.chain.join("~~");
    this.chain = [];
    return a;
  },
};

module.exports = chainMaker;
