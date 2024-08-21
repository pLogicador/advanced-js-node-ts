const NUMBERS = [10,15,20,25,5,3,9,13,40,50];

function fizzBuzz(number) {
    // Check if the value is a number
    if (typeof number !== 'number') return NaN;

    // Check divisibility and return the corresponding value
    if (number % 3 === 0 && number % 5 === 0) return 'FizzBuzz'; // Divisible by both 3 and 5
    if (number % 3 === 0) return 'Fizz'; // Divisible by 3
    if (number % 5 === 0) return 'Buzz'; // Divisible by 5

    // If not divisible by 3 or 5, return the number itself
    return number;
}

// Iterate over numbers from 0 to 100 and apply the fizzBuzz function
for (let i=0; i<=100; i++) {
    console.log(i, fizzBuzz(i));
}