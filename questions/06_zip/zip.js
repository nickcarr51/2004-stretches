/*
write the zip function
zip([{x: 1}, {x: 2}]) => {x: 3}
zip([
  {x: 1, y: 2}, 
  {x: 2, z: 1},
  {z: 2, y: 1}]) => {x: 3, y: 3, z: 3}
*/

function zip(objs) {
  let newObj = {};
  objs.forEach(obj => {
    for (let key in obj) {
      if (newObj[key]) {
        newObj[key] += obj[key];
      } else {
        newObj[key] = obj[key];
      }
    }
  })
  return newObj;
}

module.exports = { zip };
