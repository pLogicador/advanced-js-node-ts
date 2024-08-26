// Constructor Functions

/*
    Constructor Functions are used as templates to create objects.
    They allow you to create multiple instances of objects with 
    the same properties and methods.

    - Constructor Function -> Creates a new object
    - Factory Function -> Also creates a new object but without using 'new'

    In JavaScript, Constructor Functions are commonly used together with 
    the 'new' keyword to instantiate objects. By convention, the names of 
    Constructor Functions begin with uppercase letters, such as Person, 
    Car, Product, etc.

    A classic example is creating person objects.
*/

// Template for creating Person objects
function Person(firstName, lastName) {
    // Private attributes or methods (not accessible outside the constructor function)
    const ID = 1529886;

    const internalMethod = () => {
        console.log('Internal method, not accessible externally.');
    };

    // 'this' creates public attributes or methods accessible outside the function
    this.firstName = firstName;
    this.lastName = lastName;

    // Public method
    this.method = () => {
        console.log(`${this.firstName}, I am a public method!`);
    };
}

/*
    'this' inside a Constructor Function refers to the new object instance 
    being created. Whenever the function is invoked with 'new', a new object 
    is created, and 'this' points to that object.

    NOTE: It’s important to use the 'new' keyword, as without it 'this' won't work 
    as expected and may refer to the global context (e.g., the 'window' object in browsers).
*/

// Creating instances of Person objects using the constructor function
const p1 = new Person('Pedro', 'Miranda');
const p2 = new Person('Laura', 'Fernanda');

// Accessing public properties
console.log(p1.firstName);   // Output: Pedro
console.log(p2.firstName);   // Output: Laura

// Calling a public method
p1.method();    // Output: Pedro, I am a public method!
p2.method();    // Output: Laura, I am a public method!
