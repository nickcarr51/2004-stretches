const findBy = (arr, name, item) => {
  return arr.find(obj => obj[name] === item)
};

module.exports = { findBy };
