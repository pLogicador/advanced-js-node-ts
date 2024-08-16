// Declaration of a 2D array (array of arrays)
const numbers = [
    [1, 2, 3],  // Index 0
    [4, 5, 6],  // Index 1
    [7, 8, 9]   // Index 2
];

// Destructuring to access specific elements
const [, [, , six]] = numbers; // Accesses the value 6 in the array at indices [1][2]
const [firstList, secondList, thirdList] = numbers; // Assigns each subarray to a variable

// Displaying specific values
console.log(numbers[1][2]); // Directly accesses the value 6
console.log(six);           // Displays the value 6 using destructuring
console.log(thirdList[2]);  // Accesses the value 9 in the third sublist
