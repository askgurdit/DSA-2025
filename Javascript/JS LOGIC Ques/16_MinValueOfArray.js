//* Coding Challenge: Find the Minimum Value in an Array

//? 16: Write a function findMin that takes an array of numbers as input and returns the minimum value found in the array.

//* Constraints:
//? The input array may contain both positive and negative integers.
//? The input array may be empty.
//? The input array may contain duplicate values.

// method 1
 /* function findMin (arr) {
    if (arr.length === 0) {
        return undefined;
    }
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

//Method 2

    const findMin = (arr) => {
       arr = arr.sort((a,b) => {
            if (b > a) return -1;
        });
        return arr[0];
    }  */

// method 3
     const findMin = (arr) => {
        return arr.length === 0 ? undefined : Math.min(...arr);
    } 
  

// Example usage:
console.log(findMin([5, 10, 2, 8])); // Output: 2
console.log(findMin([5, -3, 0, 12, -7])); // Output: -7
console.log(findMin([])); // Output: undefined (or any suitable message for empty array)

//* Note:
//? Ensure the function handles edge cases gracefully, such as an empty input array.