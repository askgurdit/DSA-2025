//* Coding Challenge
//? 18: Write a function to convert a string to camel Case & snake_case.

const toCamelCase = (str) => {
    return str
             .trim()
             .split(" ")
             .map((curElem, index) => {
        if (index === 0) {
            return curElem.toLowerCase();
        }else {
            return curElem.charAt(0).toUpperCase() + curElem.slice(1);
        }
    })
    .join("");
}

// Example usage:
console.log(toCamelCase ("hello world thapa")); // Output: helloworld

//todo HomeWork:
//console.log(toSnakeCase("helloworld")); // Output: hello_world