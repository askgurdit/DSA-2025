//* Programming Challenge: Simple Bar Chart from Array Data

//? Create a function generateBarChart that takes an array of numbers and generates a simple text-based bar chart.


/* const generateBarChart = (arr) => {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        result += `${i + 1}: ${"*".repeat(arr[i])}\n`;
    }
    return result;
} */

// Method 2
const generateBarChart = (arr) => {
    return arr.map((num, i) => `${i + 1}: ${"*".repeat(num)}`).join("\n");
}

console.log(generateBarChart([5, 3, 9, 2]));

// 1: *****
// 2: ***
// 3: *********
// 4: **
