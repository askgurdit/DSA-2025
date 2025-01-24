// 14: Write a function called isPowerOf Two that takes an integer num as input and returns true if num is a power of two, and false otherwise.

/* function isPowerOfTwo(num) {
    if (num === 0) {
        return false;
    }
    while (num !== 1) {
        if (num % 2 !== 0) {
            return false;
        } else {
            num = num / 2 ;
                }
            return true;
        }
    } */


const isPowerOfTwo = (num) =>  {
    let output = false;
    for (let i = 1; i < num; i++) {
        if (2 ** i == num ) {
            output = true
        }
    }
    return output
}


// console.log (2** i === 8 );

// Example usage:
console.log(isPowerOfTwo (8)); // Output: true
console.log(isPowerOfTwo (7)); // Output: false

// Notes:
// The input num will be a positive integer.
// Zero (0) and negative integers are not considered powers of two.
// The function should return true if the given number is a power of 2, and false otherwise.

//Homework
// we can solve it using bitwise operator too but its your chance to do it and let me know in the comment section