// types of functions - named, anonymous, arrow, IIFE,callback function, higher order function, function expression, function declaration, function constructor, self-invoking function, nested function, pure function, impure function, recursive function, async function, generator function, constructor function, method function, getter function, setter function, static function, private function, public function, protected function

// function declaration - Named function
function sum(a, b) {
    return a + b;
};
console.log(sum(5, 6));

// function expression - Anonymous function
const multiply = function (a, b) {
    return a * b;
}
console.log(multiply(5, 8));
// Output: 40

// arrow function
//Traditional function
function divide(a, b) {
    return a / b;
}
console.log(divide(10,2));

//Arrow function
const divide = (a, b) => a / b;

// IIFE - Immediately Invoked Function Expression
(function (){
    console.log('IIFE');
})();

// Other way to write IIFE
(() => {
    console.log('IIFE');
})

// Callback function
function greet(name) {
    console.log('Hello' + name);
}
function greetUser(callback) {
    callback('John');
}
greetUser(greet);
// Output: Hello John

// Higher order function
function greet(name) {
    return 'Hello' + name;
}
function greetUser(callback) {
    return callback;
}
const greeting = greetUser(greet);
console.log(greeting('John'));

// diff in callback and higher order function
// Callback function is passed as an argument to another function and is executed inside the function.
// Higher order function returns a function as its output.
// Usecases of callback function - event handling, asynchronous programming, promises, etc.
// Usecases of higher order function - currying, partial application, function composition, etc.

// self-invoking function
(function () {
    console.log('IIFE');
})();

// nested function
function outerFunction() {
    function innerFunction() {
        console.log('Inner function');
    }
    innerFunction();
}
outerFunction();
// Output: Inner function

// pure function
function sum(a, b) {
    return a + b;
}

// impure function
let total = 0;
function add(a) {
    total += a;
    return total;
}
console.log(add(5));
console.log(add(10));
// Output: 5, 15

// Use of pure function - predictable, testable, no side effects
// Use of impure function - stateful operations, side effects, I/O operations

// recursive function
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5));

// async function
async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data; 
}
fetchData().then(data =>console.log(data));


// generator function
function* generatorFunction() {
    yield 1;
    yield 2;
    yield 3;
}
const generator = generatorFunction();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
// Output: 1, 2, 3

// constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const person = new Person('Alice', 25);
console.log(person.name);
// Output: Alice

// method function
const person1 = {
    name: 'Alice',
    greet: function() {
        console.log('Hello' + this.name);
    }
};
person1.greet();

// getter function
const person2 = {
    name: 'Alice',
    get getName() {
        return this.name;
    }
};
console.log(person2.getName);

// setter function
const person3 = {
    name: '',
    set setName(name) {
        this.name = name;
    }
};

person3.setName = 'Alice';

// static function
class Math {
    static add(a, b) {
        return a + b;
    }
}

console.log(Math.add(5, 6));

// private function
class Person4 {
    #name;
    constructor(name) {
        this.#name = name;
    }
    getName() {
        return this.#name;
    }
}

const person4 = new Person('Alice');

// public function
class Person5 {
    name;
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

const person5 = new Person('Alice');

// protected function
class Person6 {
    _name;
    constructor(name) {
        this._name = name;
    }
    getName() {
        return this._name;
    }
}

const person6 = new Person('Alice');

