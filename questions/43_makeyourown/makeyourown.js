// Make your own stretch
// try to solve for a challenging problem
// write at minium three test specs
// Jest documentation: https://github.com/sapegin/jest-cheat-sheet
// submit the stretch with solution code and test specs passing

const howManyPalindromes = (arr) => {
  return arr.reduce((a, b) => {
    if (typeof b !== 'string') throw new Error('array must only contain strings');
    return b.split('').reverse().join('') === b ? a + 1 : a;
  }, 0);
};

module.exports = { howManyPalindromes };