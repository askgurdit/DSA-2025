// Programming Question: Hash Tag Generator

// Required to implement a function that generates a hash tag from a given input string. It should be constructed as follows:

// The input string should be converted to a hash tag format, where each word is capitalised and concatenated together without spaces.
// if the lenght of the input string is greater than 280 chracters or if the input string is empty or contains only whitespace, the function should return false.
// Otherwise, the function should return the generated hash tag prefixed with it.


const generateHash = (str) => {
    if (str.length > 280 || str.trim().length === 0) {
        return false;
    }


str = str.split(" ");
str = str.map((curElem) => 
    curElem.replace(curElem[0], curElem[0].toUpperCase()));
str = `#${str.join("")}`;
//console.log(str);
return str;
} 

console.log(generateHash("my name is gurdit singh"))

