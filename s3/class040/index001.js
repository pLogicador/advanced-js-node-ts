// `Break` and `continue`
// Example with `for of`
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

for (let number of numbers) {

    // Check if the number should be skipped
    if (number === 2 || number === 5) {
        console.log('Skipped number:', number);
        continue;   // Skip to the next iteration and continue the loop
    }

    console.log('Current number:', number);

    // Check if the loop should stop at number 7
    if (number === 7) {
        console.log('Reached 7, stopping the loop!');
        break;  // Breaks the loop and stops iteration
    }
}
