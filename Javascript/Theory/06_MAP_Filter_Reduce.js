/*
The map, filter, and reduce methods are widely used in JavaScript for working with arrays. They enable developers to perform operations on array elements in a clean and functional way.

////////////////////1. map/////////////////////////
The map method creates a new array by applying a function to each element of an existing array. It does not modify the original array.

Syntax:

array.map(callback(currentValue, index, array))

Example:

const numbers = [1, 2, 3, 4];
const squared = numbers.map(num => num * num);
console.log(squared); // Output: [1, 4, 9, 16]
Here, map applies the callback function num * num to each element of numbers.

///////////////////2. filter///////////////////////
The filter method creates a new array containing only the elements that pass a specific condition (return true for the callback function). The original array remains unmodified.

Syntax:

array.filter(callback(currentValue, index, array))

Example:

const numbers = [1, 2, 3, 4];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

Here, filter includes only the elements for which the condition num % 2 === 0 is true.

⁡⁣⁢⁣///////////////////////////3. reduce///////////////////////////⁡
The reduce method applies a function to an accumulator and each element in the array (from left to right), resulting in a single output value.

Syntax:

array.reduce(callback(accumulator, currentValue, index, array), initialValue)

Example:

const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 10

Here:

acc starts as 0 (the initial value).
Each element (num) is added to acc.
Finally, acc contains the sum of all elements.

///////////////////////Combined Example///////////////////////////
Let’s combine map, filter, and reduce:

Problem: Find the sum of the squares of even numbers from an array.

const numbers = [1, 2, 3, 4, 5, 6];

const sumOfSquares = numbers
  .filter(num => num % 2 === 0) // Filter even numbers
  .map(num => num * num)       // Square each even number
  .reduce((acc, num) => acc + num, 0); // Sum the squares

console.log(sumOfSquares); // Output: 56 (4 + 16 + 36)

This example showcases the power of chaining map, filter, and reduce to achieve complex operations in a concise manner. */