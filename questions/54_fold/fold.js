const fold = (arr, num) => {
  if (num === 0) {
    return arr;
  } else {
    let newArray = []
    while(arr.length > 1) {
      if (arr.length === 1) {
        newArray.push(arr[0])
      }
      newArray.push((arr.shift() + arr.pop()))
    }
    num--
    return fold(newArray, num)
  }
};


module.exports = fold;
