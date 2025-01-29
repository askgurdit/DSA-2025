//* Coding Challenge

//? 20. Write a function to reverse a string without using any built-in methods or libraries. The function should take a string as input and return the reversed string.

// Method 1
/*const reverseString = (str) => {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
} */

// Method 2:
const reverseString = (str) => {
    return str.split("").reduce((reversed, char) => char + reversed, "");
}

// Example usage:
console.log(reverseString("hello")); // Output: olleH