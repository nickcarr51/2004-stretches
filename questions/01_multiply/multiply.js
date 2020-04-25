// This stretch requires you to write your own test cases

const multiply = (num1, num2) => {
    if (Array.from(arguments).length !== 2) throw 'need two numbers';
    return num1 * num2;
};

module.exports = { multiply };
