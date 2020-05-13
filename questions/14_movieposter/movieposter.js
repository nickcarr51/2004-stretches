//Write a function that takes a list of strings and prints them
// one per line, in a rectangular frame.
// ********
// * Any  *
// * Gun  *
// * Can  *
// * Play *
// ********

const movieposter = (arr) => {
  if (arr.length < 1) throw new Error('not long enough');
  let starWidth = 0;
  arr.forEach(word => {
    if (word.length > starWidth) {
      starWidth = word.length;
    }
  })

  starWidth = starWidth + 2;

  let poster = '';
  for (let i = 0; i < starWidth; i++) {
    poster += '*'
  }

  poster += '\n';

  arr.forEach(word => {
    let newLine = `* ${word}`
    if (newLine.length < starWidth) {
      while (newLine.length < starWidth - 1) {
        newLine += ' ';
      }
    }
    newLine += '*'

    poster += newLine
    poster += '\n'
  })

  for (let i = 0; i < starWidth; i++) {
    poster += '*'
  }

  return poster;
};

module.exports = { movieposter };
