const fizzBuzz = (num) => {
  if (typeof num !== 'number' || num % 1 !== 0 || num < 1) throw new Error('not a number')
  let array = [];
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      array.push('FizzBuzz');
    } else if (i % 3 === 0) {
      array.push('Fizz')
    } else if (i % 5 === 0) {
      array.push('Buzz')
    } else {
      array.push(i);
    }
  }
  return array;
};
module.exports = { fizzBuzz };
