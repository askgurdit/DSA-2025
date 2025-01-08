// SCOPE IN JAVASCRIPT

// LOCAL SCOPE
// Variables declared inside a function are accessible only within that function.
function myFunction() {
    let a = 1;
    console.log(a);
}
myFunction();
// console.log(a); // Error: a is not defined

// GLOBAL SCOPE
// Variables declared outside any function or block are accessible everywhere in the code.
let b = 2;
function myFunction2() {
    console.log(b);
}
myFunction2();
console.log(b);

// BLOCK SCOPE
// Variables declared with 'let' or 'const' inside a block {} are accessible only within that block.
{
    let c = 3;
    console.log(c);
}
// console.log(c); // Error: c is not defined

// FUNCTION SCOPE
// Variables declared with 'var' are scoped to the entire function, regardless of block boundaries.
function myFunction3() {
    var d = 4;
    if (true) {
        var e = 5;
    }
    console.log(d); // Output: 4
    console.log(e); // Output: 5
}
myFunction3();
// console.log(d); // Error: d is not defined
// console.log(e); // Error: e is not defined

// STRICT MODE
// In strict mode, undeclared variables are not allowed and will throw errors.
"use strict";
function myFunction4() {
    // undeclaredVar = 10; // Error: undeclaredVar is not defined
}
myFunction4();

// LEXICAL SCOPE
// Inner functions can access variables from their parent function's scope.
let f = 6;
function outerFunction() {
    let g = 7;
    function innerFunction() {
        console.log(f); // Output: 6
        console.log(g); // Output: 7
    }
    innerFunction();
}
outerFunction();

// SHADOWING
// Local variables with the same name as global variables override the global ones within their scope.
let h = 8;
function myFunction5() {
    let h = 9;
    console.log(h); // Output: 9
}
myFunction5();
console.log(h); // Output: 8

// TEMPORAL DEAD ZONE (TDZ)
// Variables declared with 'let' or 'const' cannot be accessed before initialization.
// console.log(i); // Error: Cannot access 'i' before initialization
let i = 10;

//-------------------EXTRA--------------------

// CLOSURE
// Functions remember the variables from their parent scope even after the parent function has returned.
function parentFunction() {
    let j = 11;
    return function childFunction() {
        console.log(j); // Output: 11
    };
}
const closureExample = parentFunction();
closureExample();

// GLOBAL OBJECT SCOPE
// Variables declared with 'var' in the global scope become properties of the global object.
var k = 12;
console.log(window.k); // Output: 12 (in browsers)

// MODULE SCOPE
// Variables declared in modules are scoped to the module and not accessible globally.
// export const myModuleVar = 13; // Scoped to this module only
