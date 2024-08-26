// Function using Rest Operator for Variable Number of Arguments
const calculate = function (operator, accumulator, ...numbers) {
    // Iterate over the array of numbers and perform the specified operation
    for (const number of numbers) {
        switch (operator) {
            case '+':
                accumulator += number;
                break;
            case '-':
                accumulator -= number;
                break;
            case '*':
                accumulator *= number;
                break;
            case '/':
                accumulator /= number;
                break;
            default:
                console.error('Unsupported operator');
                return;
        }
    }
    console.log(`Result: ${accumulator}`);
};

// Example usage of calculate function
calculate('*', 1, 5, 5);

// Using Rest Operator in Arrow Function
const logArguments = (...args) => {
    console.log(args); // Logs all arguments as an array
};

// Example usage of logArguments function
logArguments('*', 1, 5, 5);
// The rest operator captures all arguments into an array and logs them
