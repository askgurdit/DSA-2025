//* Interview Question:

// 15: Write a function to calculate the sum of squares of all elements in an array. For example, given the array [1, 2, 3], the function should return 14 because 1*1 + 2*2 + 3*3 = 1 + 4 +9 = 14.

/* const sumOfSquares = (arr) => {
    const squaredValues = []; // To store squared values
    arr.forEach((num) => {
        squaredValues.push(num * num); // Square each number and push it
    });

    console.log(squaredValues); // Log the array of squared values

    // Return the sum of all squares
    return squaredValues.reduce((sum, square) => sum + square, 0);
}; */

 /* const sumOfSquares = (arr) => {
    return arr.reduce ((accum, curElem) => (accum = accum + curElem * curElem), 0);
};*/


const sumOfSquares = (arr) => {
    let sum = 0;
    for  (let elem of arr) {
        sum = sum + elem * elem;
    }
    return sum;
};

// Example usage:
console.log(sumOfSquares([1, 2, 3])); // Output: 14 
