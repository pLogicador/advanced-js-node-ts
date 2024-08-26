// Generator Functions

/**
 * Generator functions are special functions that can be paused and later resumed,
 * allowing for the creation of sequences of values lazily (on demand).
 * 
 * Example 1: Creating a simple generator function.
 */

// Example 1: Simple Generator Function
function* generator1() {
    yield 'Value 1';
    yield 'Value 2';
    yield 'Value 3';
}

const g1 = generator1();

// Iterating over the generated values
for (let value of g1) {
    console.log(value);
}

// Example 2: Creating an Infinite Generator Function
function* generator2() {
    let i = 0;
    while (true) {
        yield i;
        i++;
    }
}

const g2 = generator2();
console.log(g2.next().value); // Output: 0
console.log(g2.next().value); // Output: 1
console.log(g2.next().value); // Output: 2

// Example 3: Delegating to Another Generator
function* generator3() {
    yield 0;
    yield 1;
    yield 2;
}

function* generator4() {
    yield* generator3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = generator4();
for (let value of g4) {
    console.log(value); // Outputs: 0, 1, 2, 3, 4, 5
}

// Example 4: Generating Functions with Generators
function* generator5() {
    yield function() {
        console.log('came from y1');
    };
    // Code after return will not execute
    return function() {
        console.log('came from return');
    };
}

const g5 = generator5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1(); // Executing the first generated function: Output: 'came from y1'
func2(); // Executing the second generated function: Output: 'came from y2'
