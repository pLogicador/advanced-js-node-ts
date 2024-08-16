// Destructuring Assignment (Arrays)

// Defining individual variables
let a = 'A';
let b = 'B';
let c = 'C';

// Destructuring assignment: reordering the letters
const letters = [b, c, a];
[a, b, c] = letters;

console.log(a, b, c);  // Output: B C A

// Using ...rest and ...spread

//               0     1     2     3   4   -> index   
const numbers = [100, 2222, 3250, 4000, 54];  //-> values

// Assigning the first two values and capturing the rest
const [firstNumb, secondNumb, ...rest] = numbers;

// Skipping values during destructuring
const [one, , three, , five] = numbers;

console.log(firstNumb, secondNumb);  // Output: 100 2222
console.log(rest);  // Output: [3250, 4000, 54]
console.log(one, three, five);  // Output: 100 3250 54
