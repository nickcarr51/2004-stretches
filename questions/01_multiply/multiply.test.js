const { multiply } = require('./multiply');

describe('multiply testing', () => {
  test('it should ensure it receives two numbers', () => {
    // test some values that should fail

    expect(() => multiply()).toThrow();

    expect(() => multiply(5)).toThrow();
  });

  test('it returns the product of two numbers', () => {
    // test the type of the returned value
    const result1 = multiply(2, 2);
    expect(typeof result1).toBe('number');

    // test that the returned value is correct
    // expect(() => multiply(2, 2)).toBe(4);

    // test some other values
    // expect(() => multiply(2, 3)).toBe(6);
  });

  test('it is not hardcoded (hint: use random numbers)', () => {
    expect(() => multiply(5, 5)).toBe(25);
  });
});
