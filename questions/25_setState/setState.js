// create a method called setState that updates the current state of the class

// DONT need to write your own tests for this stretch

class StatefulThing {
  constructor(initialState = {}) {
    this.state = initialState;
    this.stateHistory = [];
  }
  setState(newState) {
    this.stateHistory.push(this.state);
    let newKey = Object.keys(newState)[0];
    let newVal = newState[newKey];
    return Object.keys(this.state).reduce((a, b) => {
      if (b === newKey) {
        a[b] = newVal
        return a;
      } else {
        a[b] = this.state[b];
        return a;
      }
    }, {})
  }
}

module.exports = { StatefulThing };
