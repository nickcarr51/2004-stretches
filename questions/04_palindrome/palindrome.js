/* Given a string, determine if it is a palindrome */
/* A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam, or racecar */

const validPalindrome = (str) => {
  if (typeof str === 'number') {
    let numStrArray = str.split('');
    let numStrArrayCopy = str.split('').reverse();
    for (let i = 0; i < numStrArray.length; i++) {
      if (numStrArray[i] !== numStrArrayCopy[i]) {
        return false;
      }
    }
    return true;
  }
  
  let strCopy = str.split('').reverse().join('');
  return str === strCopy;
};

module.exports = { validPalindrome };
