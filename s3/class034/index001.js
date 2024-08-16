// Classic For Loop - Repetition Structure
for (let i = 1; i <= 10; i++) {
    const parity = i % 2 === 0 ? 'is even' : 'is odd';
    console.log(`${i} ${parity}`);
}

console.log('\n');

// Iterating over an array of fruits
const fruits = ['apple', 'grape', 'lemon', 'guava'];

for (let i = 0; i < fruits.length; i++) {
    console.log(`fruits[${i}]: ${fruits[i]}`);
}
