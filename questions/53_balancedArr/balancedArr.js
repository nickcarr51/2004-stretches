const balanced = (arr) => {
  // let idx;
  // for (let i = 0; i < arr.length; i++) {
  //   if (i === 0) {
  //     if (arr.slice(i + 1).reduce((a, b)=> a+b) === 0) {
  //       idx = i
  //     }
  //   } else {
  //     if (arr.slice(0, -i).reduce((a,b) => a + b) === arr.slice(i).reduce((a,b) => a + b)) {
  //       idx = i;
  //     }
  //   }

  // }
  // return idx || -1

  // let idx = -1;
  // for (let i = 0; i < arr.length; i++) {
  //   if (i === 0) {
  //     if (arr.slice(1).reduce((a, b) => a + b) === 0) {
  //       idx = i;
  //     }
  //   } else {
  //     if (arr.slice(i + 1).reduce((a, b) => a + b) === arr.slice(0, - i).reduce((a,b) => a + b)) {
  //       idx = i
  //     }
  //   }
  // }
  // return idx

  let idx;

  for (let i = 0; i < arr.length; i++) {
    i
  }

  // console.log(arr.slice(0, -4))
};

module.exports = balanced;
