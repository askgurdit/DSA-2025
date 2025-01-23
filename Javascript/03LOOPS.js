// LOOPS IN JAVASCRIPT

// FOR LOOP
// Used to repeat a block of code a fixed number of times.
for (let i = 0; i < 5; i++) {
    console.log(i); // Output: 0, 1, 2, 3, 4
}

// WHILE LOOP
// Repeats a block of code while the condition is true.
let j = 0;
while (j < 5) {
    console.log(j); // Output: 0, 1, 2, 3, 4
    j++;
}

// DO-WHILE LOOP
// Executes the block of code once, then repeats while the condition is true.
let k = 0;
do {
    console.log(k); // Output: 0, 1, 2, 3, 4
    k++;
} while (k < 5);

// FOR OF LOOP
// Iterates over the values of iterable objects like arrays or strings.
let arr = [1, 2, 3, 4, 5];
for (let ele of arr) {
    console.log(ele); // Output: 1, 2, 3, 4, 5
}

// forEach METHOD (ARRAY)
// Executes a provided function once for each array element.
arr.forEach(function (ele) {
    console.log(ele); // Output: 1, 2, 3, 4, 5
});

// FOR IN LOOP
// Iterates over the keys (property names) of an object.
let obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
    console.log(key, obj[key]); // Output: a 1, b 2, c 3
}

// forEach METHOD (OBJECT)
// Iterates over object keys using Object.keys().
Object.keys(obj).forEach(function (key) {
    console.log(key, obj[key]); // Output: a 1, b 2, c 3
});

/////////////////////////////  EXTRA  //////////////////////////////
// FOR OF LOOP ON STRINGS
// Iterates over each character in a string.
let str = "hello";
for (let char of str) {
    console.log(char); // Output: h, e, l, l, o
}
