//Write a function that takes an OBJ of nested elements
// and returns an OBJ of each nested route separeated by a forward ('/') and its end leaf value
//For example...
// const phonebookData = {
//   a: {
//     b: {
//       c: 12,
//     },
//   },
// };
// directory(phonebookData)=>{ 'a/b/c': 12 }

const directory = (obj) => {
  let returnObj = {};
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      let newKey = `${key}/`
      console.log(newKey)
      console.log({[newKey]: obj[key]})
      // return directory({[newKey]: obj[key]})
    } else {
      return obj[key]
    }
  }
};

module.exports = { directory };
