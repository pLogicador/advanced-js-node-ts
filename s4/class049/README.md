# Function Hoisting:

### In JavaScript, function declarations are hoisted to the top of their scope.

### This allows you to call the function before its declaration in the code.

```javascript
greet(); // This works because of function hoisting

function greet() {
  console.log("Hello!");
}
```

# First-Class Functions

### In JavaScript, functions are first-class objects.

### This means functions can be assigned to variables, passed as arguments, and returned from other functions.

```javascript
// Example 01
const functionAsData = function () {
  console.log("I am a function assigned to a variable.");
};
functionAsData();

// Example 02
function runFunction(func) {
  func();
}
runFunction(functionAsData);
```

# Arrow Functions

### Arrow functions provide a shorter syntax for writing functions and lexically bind the `this` value.

```javascript
const arrowFunction = () => {
  console.log("I am an arrow function.");
};
arrowFunction();
```

# Methods within an Object

### Functions can be defined as methods within objects.

### **ES6** allows a shorter syntax for defining methods.

```javascript
const objectWithMethod = {
  speak() {
    console.log("I am speaking...");
  },
};
objectWithMethod.speak();
```

</br>

### In JavaScript, there are several ways to declare functions, each with its own characteristics and behaviors.

## 1. **Function Hoisting**:

- **Description**: In JavaScript, function declarations are "**hoisted**" to the top of their scope. This means you can call a function before its declaration in the code.
- **Usage**: Useful when you want to ensure that a function is available anywhere within its scope, regardless of the order of declaration.

## 2. **First-Class Functions**:

- **Description**: In JavaScript, functions are treated as first-class objects. This means functions can be assigned to variables, passed as arguments to other functions, and returned by functions.
- **Usage**: Allows for more flexible and modular programming, making it easier to create callback functions and higher-order functions.

## 3. **Arrow Functions**:

- **Description**: Arrow functions provide a shorter syntax for writing functions and lexically bind the `this` value, meaning `this` inside an arrow function is the same as the `this` of the enclosing context.
- **Usage**: Useful for simple functions and when you need to ensure that `this` retains the value of the outer context.

## 4. **Methods within Objects**:

- **Description**: Starting with ES6, methods can be defined within objects using a shorter syntax. This allows for a more concise way to add functionality to objects.
- **Usage**: Used to define behaviors associated with an object, making the code cleaner and more organized.
