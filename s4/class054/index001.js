// Callback functions

// Helper function to generate random numbers within a specified range
function getRandomDelay(min = 1000, max = 3000) {
    const randomDelay = Math.random() * (max - min) + min;
    return Math.floor(randomDelay);
}

// Function f1: Simulates an asynchronous operation with a random delay
function f1(callback) {
    setTimeout(() => {
        console.log('f1');
        if (callback) callback();
    }, getRandomDelay());
}

// Function f2: Similar to f1, simulates another asynchronous operation
function f2(callback) {
    setTimeout(() => {
        console.log('f2');
        if (callback) callback();
    }, getRandomDelay());
}

// Function f3: Simulates yet another asynchronous operation
function f3(callback) {
    setTimeout(() => {
        console.log('f3');
        if (callback) callback();
    }, getRandomDelay());
}
/*
// Example 1: Random execution without callbacks
f1();
f2();
f3();
console.log('Hello, World!');
*/
// Example 2: Chained execution using callbacks (Callback Hell)
/*
f1(function() {
    f2(function() {
        f3(function() {
            console.log('Hello, World!');
        });
    });
});
*/

// Example 3: Clean callback management using separate functions
function handleF1() {
    f2(handleF2);
}

function handleF2() {
    f3(handleF3);
}

function handleF3() {
    console.log('Hello, World!');
}

// Start the chain
f1(handleF1);
