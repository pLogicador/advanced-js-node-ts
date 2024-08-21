// Write a function that takes 2 numbers and returns the smaller of them

const FIRST_VALUE = 50;
const SECOND_VALUE = 90;

// Function to find the larger of two numbers using a classic function declaration
function findTheLargest1(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    return num2;
}

// Function to find the larger of two numbers using a ternary operator
function findTheLargest2(num1, num2) {
    return (num1 > num2) ? num1 : num2;
}

// Arrow function to find the larger of two numbers with explicit return
const findTheLargest3 = (num1, num2) => {
    return (num1 > num2) ? num1 : num2;
}

// Arrow function to find the larger of two numbers using Math.max
const findTheLargest4 = (num1, num2) => {
    return Math.max(num1, num2);
}

// Shortened arrow function to find the larger of two numbers using Math.max
const findTheLargest5 = (num1, num2) => Math.max(num1, num2);

// Example usage
console.log(findTheLargest5(FIRST_VALUE, SECOND_VALUE)); // Outputs: 90
