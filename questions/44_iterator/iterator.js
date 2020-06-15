// Create a class called Iterator whose instances takes an array
// and method next() interates through it til complete

class Iterator {
  constructor(arr) {
    if (!Array.isArray(arr)) throw new Error('try an array next time')
    this.people = arr;
  }

  next() {
    return this.people.length ? { done: false, value: this.people.shift() } : { done: true, value: undefined }
  }
}

module.exports = { Iterator };
