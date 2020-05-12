//write a func that takes two arg... selectKey and obj

const comparator = (selectKey, arr) => {
    if (!arr[0].hasOwnProperty(selectKey)) {
        return 'incorrect key'; 
    }
    if (typeof arr[0][selectKey] === 'number') {
        return arr.sort((a, b) => {
            return a[selectKey] - b[selectKey]
        })
    } else if (typeof arr[0][selectKey] === 'string') {
        return arr.sort((a, b) => {
            if (a[selectKey].split(' ')[1] < b[selectKey].split(' ')[1]) {
                return -1;
            }
            if (a[selectKey].split(' ')[1] > b[selectKey].split(' ')[1]) {
                return 1;
            }
        })
    }
};


module.exports = { comparator };
