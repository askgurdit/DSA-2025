//data types 
//Primitive --> number, string, boolean, undefined, null, bigint, symbol  
//Non-Primitive --> object, array, function, date, RegExp, Map, Set, WeakMap, WeakSet  

//------- Primitive Data Types -----  

// number
let age = 25;
let pi = 3.14159;

// string
let message = 'hello!';
let s = 'bye';

// boolean
let isTrue = true;
let isFalse = false;

// undefined
let x;
console.log(x);
// Output: undefined

// null
let y = null;
console.log(y);
// Output: null

// bigint
let bigNumber = 1234567890123456789012345678901234567890n;
console.log(bigNumber);
// Output: 1234567890123456789012345678901234567890n

// symbol
let uniqueId = Symbol('id');
console.log(uniqueId);
// Output: Symbol(id)

//--------- Non-Primitive Data Types --------  

// object
let person = {
    name: "John",
    age: 30,
    grades: ["A", "B", "C"],
    greet: function() {
        console.log(this.name);
    }
};

// array
let s2 = ["A", "B", "3"];
console.log(s2[0]); // Output: "A"

// function
let sum = function(a, b) {
    return a + b;
};
console.log(sum(4, 5)); // Output: 9

// date
let today = new Date();
console.log(today);
// Output: current date and time

// regular expression (RegExp)
let pattern = /hello/;
console.log(pattern.test("hello world"));
// Output: true

// Map
// A Map is a collection of key-value pairs. Unlike objects, keys can be of any data type.
let map = new Map();
map.set("name", "Alice"); // Adding key-value pairs
map.set("age", 25);
console.log(map.get("name")); // Accessing value by key
// Output: "Alice"
console.log(map.has("age")); // Checking if a key exists
// Output: true
console.log(map.size); // Getting the number of entries
// Output: 2

// Set
// A Set is a collection of unique values. It automatically removes duplicate values.
let set = new Set([1, 2, 3, 3]); // Duplicate 3 is ignored
console.log(set); // Output: Set { 1, 2, 3 }
set.add(4); // Adding a new value
console.log(set.has(2)); // Checking if a value exists
// Output: true

//----------------------------EXTRA---------------------------





// WeakMap
// A WeakMap is similar to a Map but only allows objects as keys. 
// Keys in WeakMap are weakly referenced, meaning they can be garbage-collected if no other references exist.
let weakMap = new WeakMap();
let obj = {}; // Object used as key
weakMap.set(obj, "value"); // Adding an entry
console.log(weakMap.get(obj)); // Accessing the value
// Output: "value"
// WeakMap does not have size or iteration methods to ensure weak references.

// WeakSet
// A WeakSet is similar to a Set but only allows objects as values. 
// Objects in WeakSet are weakly referenced, allowing them to be garbage-collected.
let weakSet = new WeakSet();
let obj2 = {}; // Object added to WeakSet
weakSet.add(obj2); // Adding an object
console.log(weakSet.has(obj2)); // Checking if the object exists
// Output: true
// WeakSet does not allow iteration or size properties for the same reason as WeakMap.
