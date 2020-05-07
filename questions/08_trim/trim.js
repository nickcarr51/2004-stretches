// trim takes an object and removes any keys that have undefined or null values

const trim = obj => {
  return Object.keys(obj).reduce((a, b) => {
    if (obj[b] !== undefined && obj[b] !== null) {
      a[b] = obj[b];
    }
    return a;
  }, {});
};

module.exports = { trim };
