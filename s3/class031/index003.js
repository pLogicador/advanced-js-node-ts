// Example of Hoisting in JavaScript

// Example with 'var': The declaration is hoisted, but the initialization remains in place
console.log(subname);   // Outputs: undefined (subname is hoisted but not yet initialized)
var subname = 'Miranda';

// Example with 'let': No hoisting for 'let', resulting in a ReferenceError if accessed before declaration
// console.log(name);  // Error! 'name' is not defined
let name = 'Pedro';

// Example with 'function': Both the declaration and initialization are hoisted
console.log(addNumbers(5, 10)); // Outputs: 15
function addNumbers(leftNumb, rightNumb) {
    return leftNumb + rightNumb;
}

// Example with function expression assigned to 'const': No hoisting for function expressions
// console.log(func); // Error! 'func' is not defined
const func = function() {
    // Function body...
};
