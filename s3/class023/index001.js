// Example 1: Short Circuit with && (AND)
function sayHello() {
    return 'Hello!';
}

let willExecute = 'James'; // Any truthy value here will cause the function to execute.
console.log(willExecute && sayHello()); // Returns 'Hello!' because `willExecute` is truthy.

console.log("\n");

// Example 2: Short Circuit with || (OR)
const colorUser = null; // The user has not specified a color
const colorDefault = colorUser || 'black';

console.log(colorDefault); // Returns 'black' because `colorUser` is falsy.

console.log("\n");

// Example 3: Using || to find the first truthy value
const a = 0;
const b = false;
const c = 'false';
const d = undefined;
const e = NaN;

console.log(a || b || c || d || e); // Returns 'false' (the string), the first truthy value encountered.