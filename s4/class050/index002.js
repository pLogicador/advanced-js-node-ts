// Destructuring Objects and Arrays in JavaScript

// Example 1: Object Destructuring as a Parameter
function printPersonInfo({ firstName, lastName, age }) {
    // Destructuring in parameters allows extracting values directly from an object
    console.log(`First Name: ${firstName}, Last Name: ${lastName}, Age: ${age}`);
}

const person = { firstName: 'Pedro', lastName: 'Miranda', age: 45 };
printPersonInfo(person); // Passing an object literal

// Example 2: Array Destructuring as a Parameter
function printValues([value1, value2, value3]) {
    // Destructuring in parameters allows extracting values directly from an array
    console.log(`Value 1: ${value1}, Value 2: ${value2}, Value 3: ${value3}`);
}

printValues(['Pedro', 'Miranda', 34]); // Passing an array literal

// Example 3: Rest Operator for Variable Number of Arguments
function calculate(operator, accumulator, ...numbers) {
    // The rest operator (...) captures all remaining arguments in an array
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
}

calculate('*', 1, 5, 5); // Calculating with multiple numbers
