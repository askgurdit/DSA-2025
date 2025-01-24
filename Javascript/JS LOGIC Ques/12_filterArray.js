// 12: Write a function that takes an array of integers as input and removes any duplicate elements, returning a new array with only the unique elements.

const removeDuplicates = (arr) => {
    let newArr = [...new Set(arr)]
    return newArr
}

// Example usage:
console.log(removeDuplicates ([1, 2, 3, 2, 1, 4])); // Output: [1, 2, 3, 4] console.log(removeDuplicates ([5, 6, 7, 7, 8, 8, 9])); // Output: [5, 6, 7, 8,
91
console.log(removeDuplicates ([1, 2, 3, 4])); // Output: [1, 2, 3, 4] console.log(removeDuplicates ([])); // Output: []

// The new Set() method in JavaScript creates a new Set object. A Set object is a collection of unique values. It can store any type of value, whether primitive values or object references.

// Constraints:

// The input array may contain both positive and negative integers. // The input array may be empty.
// The elements in the input array are not guaranteed to be sorted.
// The output array should retain the original order of elements from the input array.