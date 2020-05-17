//arrayexchange should exchange the elements of two arrays in-place in a way that their new content is also reversed.
//restricted use: reverse()

const arrayexchange = (a, b) => {
    let aCopy = a.slice()
        .reduceRight((acc, cv) => {
            acc.push(cv);
            return acc;
        }, [])
    let bCopy = b.slice()
        .reduceRight((acc, cv) => {
            acc.push(cv);
            return acc;
        }, [])
    a.splice(0, aCopy.length, ...bCopy);
    b.splice(0, bCopy.length, ...aCopy)
    return;
}

module.exports = { arrayexchange };
