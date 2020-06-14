const { howManyPalindromes } = require('./makeyourown');

describe('howManyPalindromes', () => {
  it('it returns a number', () => {
    const array1 = ['level', 'racecar', 'mom'];
    expect(typeof howManyPalindromes(array1)).toEqual('number');
  })
  it('takes an array of only strings', () => {
    const badArray = ['racecar', 'level', 42]
    expect(() => howManyPalindromes(badArray)).toThrow();
  })
  it('returns 0 if there are no palindromes', () => {
    const noPalindromes = howManyPalindromes(['banana', 'taco', 'pizza']);
    expect(noPalindromes).toEqual(0);
  })
  it('returns the correct number of palindromes', () => {
    const fourPalindromes = howManyPalindromes(['palindrome', 'radar', 'pie', 'solos', 'bike', 'poop', 'lol']);
    expect(fourPalindromes).toEqual(4);
  })
  it('returns the correct number of palindromes', () => {
    const threePalindromes = howManyPalindromes(['wow', 'bob', 'kayak', 'boat', 'ocean'])
    expect(threePalindromes).toEqual(3);
  })
});
