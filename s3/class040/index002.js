// Example with `do while`
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

let index = 0;

do {
    const currentNumber = numbers[index];

    if (currentNumber === 2) {
        console.log('Skipped!');
        index++;
        continue;   // Skip the rest of the loop and move to the next iteration
    }

    console.log(currentNumber);

    if (currentNumber === 7) {
        console.log('Reached 7, stopping!');
        break;  // Exit the loop
    }

    index++; // Update the control variable to move to the next element
} while (index < numbers.length);
