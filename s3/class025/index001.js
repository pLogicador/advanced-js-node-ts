// if else (2)

const n = 10;

// Evaluates conditions in sequence and executes the first true condition found
if (n >= 0 && n <= 5 ) {
    console.log('The number is between 0 and 5.');
} else if (n >= 6 && n <= 8) {
    console.log('The number is between 6 and 8.');
} else if (n <= 11) {   // true - It's a useless condition, but js catches this condition first
    console.log('I was detected first.');
} else if (n >= 9 && n <= 11) { // true
    console.log('The number is between 9 and 11.');
} else {
    console.log('The number is NOT between 0 and 11.');
}

console.log('...Continuing with normal flow.');
