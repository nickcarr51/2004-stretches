//You are writing the game rock-paper-scissors.
/* 
RULES:
Scissors defeat Paper
Paper defeats Rock
Rock defeats Scissors 
*/

class RPS {
  constructor(player1, player2) {
    this.players = [player1, player2];
    this.player1 = player1;
    this.player2 = player2;
    this.player1Wins = 0;
    this.player2Wins = 0;
  }
  play(move1, move2) {
    if (move1 === move2) return;
    if (move1 === 'Rock') {
      if (move2 === 'Paper') {
        this.player2Wins++;
        return `Paper defeats Rock, ${this.player2} wins this round.`;
      } else if (move2 === 'Scissors') {
        this.player1Wins++;
        return `Rock defeats Scissors, ${this.player1} wins this round.`;
      }
    }
    if (move1 === 'Paper') {
      if (move2 === 'Scissors') {
        this.player2Wins++;
        return `Scissors defeats Paper, ${this.player2} wins this round.`;
      } else if (move2 === 'Rock') {
        this.player1Wins++;
        return `Paper defeats Rock, ${this.player1} wins this round.`;
      }
    }
    if (move1 === 'Scissors') {
      if (move2 === 'Rock') {
        this.player2Wins++;
        return `Rock defeats Scissors, ${this.player2} wins this round.`;
      } else if (move2 === 'Paper') {
        this.player1Wins++;
        return `Scissors defeats Paper, ${this.player1} wins this round.`;
      }
    }
    
  }
  winner() {
    if (this.player1Wins > this.player2Wins) {
      return `The victor is ${this.player1} with ${this.player1Wins} points.`
    } else if (this.player2Wins > this.player1Wins) {
      return `The victor is ${this.player2} with ${this.player2Wins} points.`
    }
  }
}

module.exports = { RPS };
