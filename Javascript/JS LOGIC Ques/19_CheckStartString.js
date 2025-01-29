//* Coding Challenge

//?19: Write a function to check if a given string starts with a specific substring.

//Input:
//? str: A string (e.g., "Hello world").
//? subStr: A substring to check if it starts the given string (e.g., "Hello").
//? Output: true if the given string starts with the specified substring, otherwise false.


// Method 1
/* const startsWith = (str, substr) => {
    return str.toLowerCase().startsWith(substr.toLowerCase());
} */

// Method 2
const startsWith = (str, substr) => {
    return str.slice(0, substr.length).toLowerCase() === substr.toLowerCase();


}


// Example usage:
console.log(startsWith("Hello world", "hello")); // Output: true
console.log(startsWith("Hello world", "World")); // Output: false