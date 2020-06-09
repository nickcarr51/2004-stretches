/*
SortOrder takes an array of objects, a key to be sorted on 
and a key for the return value. 
*/

function sortOrder(arr, sort, key) {
  return (typeof arr[0][sort] === 'number')
  ?
  arr.sort((a, b) => a[sort] - b[sort]).map(obj => obj[key])
  :
  arr.sort((a, b) => a[sort] < b[sort] ? -1 : 1).map(obj => obj[key]);
}

module.exports = { sortOrder };
