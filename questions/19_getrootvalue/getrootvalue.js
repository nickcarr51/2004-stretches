//Given an object of likely nested objects, where the final element is an array containing positive integers
//write a function that returns the name of the root property that a particular integer lives in.
//ie:
// object = {
//   "one": {
//       "l1": {
//           "val1": [40, 65, 113, 200]
//        }
//   },
//   "two": {
//       "l1": [45, 1, 75, 80],
//       "l2": [12, 38, 2, 15]
//   },
//   "three": {
//       "l1": [10, 92, 53, 71],
//       "l2": [82, 34, 6, 19]
//   }
// }
//getrootvalue(object,40)=>'one'
//returns -1 if value isn't found

const getrootvalue = (obj, val) => {
    let deepKey;
    let rootKey;
    for (let key in obj) {
        let keyName = key;
        if (Array.isArray(obj[key])) {
            if (obj[key].includes(val)) {
                let deepKey = key;
            }
        } else {
            return getrootvalue(obj[key], val);
        }
    }

    for (let key in obj) {
        if (key === deepKey) {
            rootKey = key;
        }
    }
    
    if (deepKey) {
        return deepKey;
    } else {
        return null;
    }
};

module.exports = { getrootvalue };
