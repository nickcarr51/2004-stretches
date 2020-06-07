
const encrypt = (str) => {
  return str.split(' ').map(word => {
    let newStr = '';
    word.split('').forEach((char, idx) => {
      switch (idx) {
        case 0:
          newStr += word.charCodeAt(0);
          break;
        case 1:
          newStr += word[word.length - 1];
          break;
        case (word.length - 1):
          newStr += word[1];
          break;
        default:
          newStr += char;
      }
    })
    return newStr;
  }).join(' ')
}

module.exports = { encrypt };
