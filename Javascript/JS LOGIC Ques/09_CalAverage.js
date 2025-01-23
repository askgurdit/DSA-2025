// Challenge: Calculate the Average

// Write a function called calculateAverage that takes an array of numbers as input and returns the average of those numbers.

// Your function should:

// Accept an array of numbers as input.
// Calculate the sum of all the numbers in the array.
// Divide the sum by the total number of elements in the array to find the average.
// Return the calculated average.

const calculateAverage = (arr) => {
    const total = arr.reduce((acc, curr) => acc + curr, 0);
    const average = total / arr.length;
    return average;
}

// Example usage:
console.log(calculateAverage([5, 10, 2, 8])); // Output: 6

/////Using for loop/////////////
/* const ArrayAvg = (arr) => {
     let sum = 0 ;
     for(let i=0; i<arr.length; i++) {
      sum = sum + arr[i] ;
     }
     return sum / arr.length;
    }
   console.log(ArrayAvg([5,10,2,8])) ; /*
