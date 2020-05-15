// Given a number of rows n, print out Floyd's Triangle
// Example:
//  input: n = 3
//  output:
//  1
//  23
//  456

const floydsTriangle = (n) => {
    let result = ``;
    let num = 1;
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            result += num;
            num++;
        }
        if (i < n) {
            result += `\n`
        }
    }
    return result;
};

module.exports = { floydsTriangle };
