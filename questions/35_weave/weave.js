// weave should take any number of arrays and return a singular array of all arrays interwoven.
// if one array is longer than another place a null value in its allocated place
// weave([1, 2, 3], [4, 5]) === [1, 4, 2, 5, 3, null]

const weave = (...args) => {
  let argArray = [...args];
  let loopLength = 0;
  let loops = 0;
  argArray.forEach((arg) => {
      if (arg.length > loopLength) {
        loopLength = arg.length;
      }
  })
  let weavedArr = [];
  while (loops < loopLength) {
    argArray.forEach(arg => {
      if (arg[0]) {
        weavedArr.push(arg.shift())
      } else {
        weavedArr.push(null)
      }
    })
    loops++
  }
  return weavedArr;
};

module.exports = { weave };
