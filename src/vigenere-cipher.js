const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error("no parameters");
    let cipher = "";
    let count = 0;
    message = message.toUpperCase();
    key = key.toUpperCase();
    for (let i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        cipher += String.fromCharCode(
          ((message.charCodeAt(i) + key.charCodeAt(count % key.length) - 130) %
            26) +
            65
        );
        count++;
      } else cipher += message[i];
    }

    if (this.isDirect) {
      return cipher;
    } else {
      return cipher.split("").reverse().join("");
    }
  }
  decrypt(message, key) {
    if (!message || !key) throw new Error("no parameters");

    let cipher = "";
    let count = 0;
    message = message.toUpperCase();
    key = key.toUpperCase();
    for (let i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        cipher += String.fromCharCode(
          ((message.charCodeAt(i) + 26 - key.charCodeAt(count % key.length)) %
            26) +
            65
        );
        count++;
      } else cipher += message[i];
    }

    if (this.isDirect) {
      return cipher;
    } else {
      return cipher.split("").reverse().join("");
    }
  }
}

module.exports = VigenereCipheringMachine;
