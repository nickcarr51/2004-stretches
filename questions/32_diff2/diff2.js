// diffTwo should return all pairs of integers from a given array of integers that have a difference of 2.
// the returning array of pairs should be sorted in ascending order of values.
//diffTwo([1, 2, 3, 4])=>[[1, 3], [2, 4]]

const diffTwo = (arr) => {
    if (!Array.isArray(arr)) throw new Error('argument must be an array');
    return arr.reduce((a, b) => {
        for (let i = 0; i < arr.length; i++) {
            if (b !== arr[i] && b - arr[i] === 2) {
                a.push([arr[i], b]);
            }
        }
        return a;
    }, []).sort((a, b) => a[0] - b[0])
}

module.exports = { diffTwo };
