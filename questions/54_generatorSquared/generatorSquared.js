// Create a generator that squares its input until max limit
// Approved documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
// Pass the specs provided

//write your function here
function* sqauredGen(num1, num2) {
    let idx = num1
    while (num2) {
        yield Math.pow(idx, 2);
    }
    return true;

}
module.exports = { sqauredGen };
