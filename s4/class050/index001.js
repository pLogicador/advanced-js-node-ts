// Function Parameters
/*
    In JavaScript, functions automatically create an 'arguments' variable 
    when using 'function declarations' or 'function expressions' 
    without explicitly defined parameters. This 'arguments' object contains 
    all the arguments passed to the function.
*/

// Example 1: Function with 'arguments'
function logArguments() {
    console.log('hey');
    console.log(arguments[0]); // The 'arguments' object contains all passed arguments
}

logArguments('Hello', 1, 2, 3, 4, 5); // JavaScript handles the varying number of arguments without error

// Example 2: Sum Function with 'arguments'
function sumAll() {
    let total = 0;

    for (let arg of arguments) {
        total += arg;
    }
    console.log(total);
}

sumAll(5, 5); // Output: 10

// Example 3: Function with Explicit Parameters
function logValues(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f);
}

logValues(1, 2, 3); // JavaScript assigns 'undefined' to missing parameters

// Example 4: Function with Default Parameter Values
function add(a, b = 5) {
    console.log(a + b);
}

add(5); // If the second argument is not provided, the default value (5) is used

// Example 5: Function with Multiple Parameters and Default Values
function addWithDefaults(a, b = 5, c = 4) {
    console.log(a + b + c);
}

addWithDefaults(5, undefined, 10); 
// Passing 'undefined' for a parameter uses the default value for that parameter
