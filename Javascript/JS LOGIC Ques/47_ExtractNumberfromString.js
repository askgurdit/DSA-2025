//*
//* Programming Challenge: Extract Numbers from a String
//*

//? Write a regular expression to extract all numbers from a given string.

//* Requirements
//? Extract all numbers from a string.
//? Return the numbers as an array.

//* Use Cases
//? Parsing numerical data from text.
//? Extracting numeric values for calculations.
//? Filtering numbers from mixed content.

/* const extractNumbers = (str) => {
    const regex = /\d+/g;
    return str.match(regex);

} */

// Second way:
const extractNumbers = (str) => {
    const regex = /\d+/g;
    const result = str.match(regex);
    return result ? result : null;
}


console.log(extractNumbers("abc123def456")); // Expected output: ["123", "456"
console.log(extractNumbers("no numbers here")); // Expected output: null
console.log(extractNumbers("1a2b3c4d")); // Expected output: ["1", "2", "3", "4"] 
console.log(extractNumbers("100, 200 and 300")); // Expected output: ["100", "200", "300"] 
console.log(extractNumbers("")); // Expected output: null

//* Constraints
//? Extract all numeric values.
//? Return as an array.