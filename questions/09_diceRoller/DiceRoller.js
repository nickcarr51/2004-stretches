// Create a class called DiceRoller
// It should contain a roll method and a
// history property which outputs all of the previous rolls

class DiceRoller {
  constructor(sides, dice) {
    if (typeof sides !== 'number' || typeof dice !== 'number' || sides < 1 || dice < 1) {
      throw new Error('something went wrong')
    }
    this.sides = sides;
    this.dice = dice;
    this.history = [];
  }

  roll() {
    let output = [];
    for (let i = 0; i < this.dice; i++) {
      let dieRoll = Math.floor(Math.random() * this.sides) + 1;
      output.push(dieRoll); 
    }
    this.history.push(output);
    return output;
  }

}

// My attempt at the extra credit below....

// class DiceRoller {
//   #sides;
//   #dice;
//   #history;
//   constructor(sides, dice) {
//     if (typeof sides !== 'number' || typeof dice !== 'number' || sides < 1 || dice < 1) {
//       throw new Error('something went wrong')
//     }
//     this.#sides = sides;
//     this.#dice = dice;
//     this.#history = [];
//   }

//   roll() {
//     let output = [];
//     for (let i = 0; i < this.#dice; i++) {
//       let dieRoll = Math.floor(Math.random() * this.#sides) + 1;
//       output.push(dieRoll); 
//     }
//     this.#history.push(output);
//     return output;
//   }

// }

module.exports = { DiceRoller };
