/* Description
- Object Destructuring Assignment is a powerful technique for extracting values from an object and assigning them to 
variables in a clear and concise manner. Destructuring allows you to assign values to variables with 
different names from the object keys, set default values if a key does not exist, and extract multiple values at once.

In this example, we explore various destructuring techniques, including renaming variables, using default values, 
and nested destructuring to access properties within objects.
*/

const people = {
    // name: 'Pedro',
    subname: 'Miranda',
    age: 20,
    address: {
        street: 'Av Pelouro',
        number: 95
    }
};

// Destructuring Assignment
const { name: newName = 'Does not exist' } = people; // Specifies the key and renames the variable with a default value
const { address: { street: streetAlias, number }, address } = people; // Nested destructuring and renaming
const { age, ...rest } = people; // Extracts 'age' and captures the rest in another object

console.log(newName); // 'Does not exist'
console.log(streetAlias, number, address); // 'Av Pelouro', 95, { street: 'Av Pelouro', number: 95 }
console.log(age, rest); // 20, { subname: 'Miranda', address: { ... } }
