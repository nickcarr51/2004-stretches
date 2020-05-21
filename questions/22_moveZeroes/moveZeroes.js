const moveZeroes = (arr) => {
    let zeroes = [];
    arr.forEach(num => num === 0 && zeroes.push(num))
    let filtered = arr.filter(num => num !== 0).concat(zeroes);
    arr.splice(0, arr.length, ...filtered);
    return arr;
  };

module.exports = { moveZeroes };