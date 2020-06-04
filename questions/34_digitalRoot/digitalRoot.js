/*
Digital root is the recursive sum of all the digits in a number.
ex.
16  -->  1 + 6 = 7
55555 --> 5 + 5 + 5 + 5 + 5 = 25 --> 2 + 5 --> 7 
*/

//YOUR CODE GOES HERE

class digitalRoot {
    constructor(num) {
        this.num = num;
    }

    root(num) {
        while (num > 9) {
            num = this.root(
                num.toString().split('').map(n => n = +n).reduce((a, b) => a + b)
            )
        }        
        return num;
    }   

    // version below returns correct digital root with recursion but with 1 less call on the stack
    
    // root(num) {
    //     num = num.toString().split('').map(n => n = +n).reduce((a, b) => a + b)
    //     while (num > 9) {
    //         num = this.root(num);
    //     }
    //     return num;
    // }   
}

module.exports = { digitalRoot };
