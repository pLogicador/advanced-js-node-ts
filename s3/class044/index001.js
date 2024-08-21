// handling and throwing errors (`try`, `catch`, `throw`)

// Function to add two numbers with input validation
function sum(n1, n2) {
    // Checks if both arguments are numbers
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw new Error("Both arguments must be numbers.");
    }
    return n1 + n2;
}

// Code block to test the 'sum' function and error handling
try {
    console.log(sum(5, 10));    // Attempt to execute the function with valid parameters
    console.log(sum('a', 10)); // Attempt to execute function with invalid parameters
} catch (error) {
    // Catch and handle the thrown error
    console.error('An error occurred:', error.message);
}
