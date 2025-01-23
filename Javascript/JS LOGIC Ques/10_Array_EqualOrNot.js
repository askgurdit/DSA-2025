// Write a function arraysAreEqual that takes two arrays arr1 and arr2 as input and returns true if the arrays are equal (i.e., contain the same elements in the same order), and false otherwise.

const arraysAreEqual = (arr1, arr2) => {
    if (arr1.length != arr2.length) return false;

    return arr1.every((curVal, index) => curVal === arr2[index]);
}


// Example usage:
console.log(arraysAreEqual([1, 2, 3], [1, 2, 3])); //Output: true
console.log(arraysAreEqual([1, 2, 3], [1, 2, 4])); // Output: false
console.log(arraysAreEqual([], [])); // Output: true

// Note:
// The function should return false if the arrays have different lengths.

// The function should compare each element of arrl with the corresponding element in arr2.

// The function should return true only if all elements in arr1 are equal to their corresponding elements in arr2.

///////////////Using LOOP/////////////
/* 
const arraysAreEqual = (array1, array2) => {
    if (array1.length !== array2.length) {
        return false
    }
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false
        }
    }
    return true
}

console.log(arraysAreEqual([1, 2, 3], [1, 2, 3]))

 */