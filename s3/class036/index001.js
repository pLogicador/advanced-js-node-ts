// for in (loop Structures) -> reads the object's indexes(vector) or keys(object)

// Example 1 - With vector
const fruits = ['apple', 'pear', 'guava'];

/* // With 'for' classic
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
*/

// Using `for...in` to iterate over array indices
for (let index in fruits) {
    console.log(fruits[index]);
}

console.log('\n');

// Example 2 - With object
const person = {
    firstName: 'Pedro',
    lastName: 'Miranda',
    age: 25
};

// Access object properties using their keys
console.log(person.firstName);
console.log(person['firstName']);

const keyName = 'firstName';
console.log(person[keyName]);

// Using `for...in` to iterate over object properties
for (let key in person) {
    console.log(key, person[key]);
}



