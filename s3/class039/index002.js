function getRandomIntInRange(min, max) {
    // Generates a random integer between min (inclusive) and max (exclusive)
    const randomNum = Math.random() * (max - min) + min;
    return Math.floor(randomNum);
}

const MIN_VALUE = 1;
const MAX_VALUE = 30;
let randomInt = getRandomIntInRange(MIN_VALUE, MAX_VALUE);

// Example 01 - While loop: check the condition and then execute if true
while (randomInt !== 10) {
    randomInt = getRandomIntInRange(MIN_VALUE, MAX_VALUE);
    console.log(randomInt);
}

console.log('\n\n');

// Example 02 - Do-while loop: execute the code block at least once, then check the condition
do {
    randomInt = getRandomIntInRange(MIN_VALUE, MAX_VALUE);
    console.log(randomInt);
} while (randomInt !== 10);
