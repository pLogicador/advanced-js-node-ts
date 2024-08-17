// for of (Loop Structures)
// iterating through string and array indexes

const name = 'Pedro,Miranda';
const nameArr = ['Pedro', 'Silva', 'Miranda'];

console.log('\nExample with for...of:');
for (let value of name) {
    console.log(value); // More direct iteration
}

console.log('\nExample with for...of in array:');
for (let value of nameArr) {
    console.log(value);
}

// Similar Executions
console.log('\nExample with classic for:');
for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
}

console.log('\nExample with for...in:');
for (let i in name) {
    console.log(name[i]);
}

// Using forEach
console.log('\nExample with forEach function:');
nameArr.forEach(function(element, index, array) { // Parameters: value, index, and array (optional)
    console.log(element, index, array);
});

// For Objects
console.log('\nExample with for...in for objects:');
const person = {
    firstName: 'Pedro',
    lastName: 'Miranda'
};

for (let key in person) {
    console.log(key, person[key]);
}
