// Caeser Cipher
// https://en.wikipedia.org/wiki/Caesar_cipher
// create a function that takes a string and a shift value and returns an encrypted string

// accept only alphanumeric characters
// shifted values should wrap back around
// z -> a  and 9 -> 0

// example
// str = 'hello'
// shift = 3
// result = 'khoor'

// example
// str = "yolo789"
// shift = 4
// result = "csps123"

const encryptString = (str, shift) => {
  return str.split('').map((letter, idx) => {
    const regEx = /[a-zA-Z0-9]/;
    if (!regEx.test(letter)) throw new Error('NOPE');
    code = str.charCodeAt(idx);
    if (code < 58) {
      if (shift > 0) {
        for (let i = 0; i < shift; i++) {
          if (code === 57) {
            code = 48;
          } else {
            code++;
          }
        }
      } else if (shift < 0) {
        for (let i = 0; i > shift; i--) {
          if (code === 48) {
            code = 57;
          } else {
            code--;
          }
        }
      }
      return String.fromCharCode(code);
    } else {
      if (shift > 0) {
        for (let i = 0; i < shift; i++) {
          if (code === 122) {
            code = 97;
          } else {
            code++;
          }
        }
      } else if (shift < 0) {
        for (let i = 0; i > shift; i--) {
          if (code === 97) {
            code = 122;
          } else {
            code--;
          }
        }
      }
      return String.fromCharCode(code);
    }
  }).join('');
};

module.exports = { encryptString };
