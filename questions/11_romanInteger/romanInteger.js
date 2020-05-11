//Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
/*
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

I can be placed before V (5) and X (10) to make 4 and 9.  
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
*/
/*
examples:
1 // I
2 // II
3 // III
4 // IV
1994 // MCMXCIV
*/

const romanInteger = (num) => {
  if (num < 1 || num > 3999) throw new Error('invalid number');
  let romanNum = ''
  num = num.toString().split('').map(num => {
      return Number(num);
  })
  if (num.length === 4) {
      for (i = 0; i < num[0]; i++) {
          romanNum += 'M';
      }
      if (num[1] < 4) {
          for (let i = 0; i < num[1]; i++) {
              romanNum += 'C';
          }
      } else if (num[1] === 4) {
          romanNum += 'CD';
      } else if (num[1] === 5) {
          romanNum += 'D'
      } else if (num[1] > 5 && num[1] < 9) {
          romanNum += 'D';
          for (let i = 5; i < num[1]; i++) {
              romanNum += 'C';
          }
      } else if (num[1] === 9) {
          romanNum += 'CM'
      }
      if (num[2] < 4) {
          for (let i = 0; i < num[2]; i++) {
              romanNum += 'X';
          }
      } else if (num[2] === 4) {
          romanNum += 'XL';
      } else if (num[2] === 5) {
          romanNum += 'L'
      } else if (num[2] > 5 && num[2] < 9) {
          romanNum += 'L';
          for (let i = 5; i < num[2]; i++) {
              romanNum += 'X'
          }
      } else if (num[2] === 9) {
          romanNum += 'XC'
      }
      if (num[3] < 4) {
          for (let i = 0; i < num[3]; i++) {
              romanNum += 'I';
          }
      } else if (num[3] === 4) {
          romanNum += 'IV';
      } else if (num[3] === 5) {
          romanNum += 'V';
      } else if (num[3] > 5 && num[3] < 9) {
          romanNum += 'V';
          for (let i = 5; i < num[3]; i++) {
              romanNum += 'I';
          }
      } else if (num[3] === 9) {
          romanNum += 'IX';
      }
  }
  if (num.length === 3) {
      if (num[0] < 4) {
          for (let i = 0; i < num[1]; i++) {
              romanNum += 'C';
          }
      } else if (num[0] === 4) {
          romanNum += 'CD';
      } else if (num[0] === 5) {
          romanNum += 'D'
      } else if (num[0] > 5 && num[0] < 9) {
          romanNum += 'D';
          for (let i = 5; i < num[0]; i++) {
              romanNum += 'C';
          }
      } else if (num[0] === 9) {
          romanNum += 'CM'
      }
      if (num[1] < 4) {
          for (let i = 0; i < num[1]; i++) {
              romanNum += 'X';
          }
      } else if (num[1] === 4) {
          romanNum += 'XL';
      } else if (num[1] === 5) {
          romanNum += 'L'
      } else if (num[1] > 5 && num[1] < 9) {
          romanNum += 'L';
          for (let i = 5; i < num[1]; i++) {
              romanNum += 'X'
          }
      } else if (num[1] === 9) {
          romanNum += 'XC'
      }
      if (num[2] < 4) {
          for (let i = 0; i < num[2]; i++) {
              romanNum += 'I';
          }
      } else if (num[2] === 4) {
          romanNum += 'IV';
      } else if (num[2] === 5) {
          romanNum += 'V';
      } else if (num[2] > 5 && num[2] < 9) {
          romanNum += 'V';
          for (let i = 5; i < num[2]; i++) {
              romanNum += 'I';
          }
      } else if (num[2] === 9) {
          romanNum += 'IX';
      }
  }
  if (num.length === 2) {
      if (num[0] < 4) {
          for (let i = 0; i < num[0]; i++) {
              romanNum += 'X';
          }
      } else if (num[0] === 4) {
          romanNum += 'XL';
      } else if (num[0] === 5) {
          romanNum += 'L'
      } else if (num[0] > 5 && num[0] < 9) {
          romanNum += 'L';
          for (let i = 5; i < num[0]; i++) {
              romanNum += 'X'
          }
      } else if (num[0] === 9) {
          romanNum += 'XC'
      }
      if (num[1] < 4) {
          for (let i = 0; i < num[1]; i++) {
              romanNum += 'I';
          }
      } else if (num[1] === 4) {
          romanNum += 'IV';
      } else if (num[1] === 5) {
          romanNum += 'V';
      } else if (num[1] > 5 && num[1] < 9) {
          romanNum += 'V';
          for (let i = 5; i < num[1]; i++) {
              romanNum += 'I';
          }
      } else if (num[1] === 9) {
          romanNum += 'IX';
      }
  }
  if (num.length === 1) {
      if (num[0] < 4) {
          for (let i = 0; i < num[0]; i++) {
              romanNum += 'I';
          }
      } else if (num[0] === 4) {
          romanNum += 'IV';
      } else if (num[0] === 5) {
          romanNum += 'V';
      } else if (num[0] > 5 && num[0] < 9) {
          romanNum += 'V';
          for (let i = 5; i < num[0]; i++) {
              romanNum += 'I';
          }
      } else if (num[0] === 9) {
          romanNum += 'IX';
      } 
  }
  return romanNum;
};

module.exports = { romanInteger };
