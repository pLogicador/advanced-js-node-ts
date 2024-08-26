# Immediately Invoked Function Expression (IIFE)

## IIFE helps to avoid polluting the global scope by keeping variables and logic encapsulated within the function. This way, you only expose what is necessary while ensuring that local variables do not interfere with the global scope.

### **Sintaxe**:

```javascript
function() {
    // This will cause a syntax error without wrapping
}();
```

</br>

### **Example 1**: Defines an IIFE with no parameters. Inside the function, the variable `name` is scoped locally and does not interfere with the global variable `name`.

```javascript
(function () {
  const name = "Pedro";
  console.log(name);
})(); // IIFE is invoked immediately, no arguments

// Declaring a global variable for comparison
const name = "Miranda";
```

</br>

### **Example 2**: Demonstrates an IIFE with parameters. The arguments `age`, `weight`, and `height` are passed into the IIFE when it is immediately invoked.

```javascript
(function (age, weight, height) {
  console.log(age, weight, height);
})(20, 75, 1.8); // IIFE invoked with arguments
```
