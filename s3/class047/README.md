# Closure (fechamento)

> A **closure** is a fundamental concept in JavaScript and other functional programming languages. It refers to a function
> that "remembers" the lexical environment in which it was created. Essentially, closures retain access to variables from the
> scope where they were declared, even if that scope is no longer active.

In simpler terms, a closure is a function that has access to:

1. Its **own scope** (variables defined within the function).
2. The variables from the **outer scope** where the function was created.
3. The **global scope**, if necessary.

This means that a closure preserves the environment in which it was created, allowing it to access those variables later, even when executed outside of that environment.

**Simple Example of Closure:**

```javascript
function createCounter() {
  let count = 0; // Variable in the createCounter function's scope

  return function () {
    // Inner function (closure)
    count++; // Accesses 'count' from the outer scope
    return count;
  };
}

const counter = createCounter(); // Call createCounter function
console.log(counter()); // Returns 1
console.log(counter()); // Returns 2
```

Here, the inner function returned by `createCounter` "remembers" the variable `count` from its outer scope. Even after
`createCounter` finishes executing, the closure maintains access to the `count` variable, creating a "closure" over it and
allowing it to be incremented in subsequent calls to `counter`.

## Why Are Closures Useful?

- **Encapsulation**: Closures enable you to encapsulate behaviors or data. Variables within a closure are "private" and can only be accessed via the inner function, keeping them protected from accidental changes from the outside.

- **Variable Privacy**: Since closure variables aren't directly exposed, closures help maintain private data, simulating variable privacy, which is helpful in larger projects.

**Example of Privacy:**

```javascript
function createPerson(name) {
  return {
    getName: function () {
      return name; // Accessing 'name' from the outer scope
    },
  };
}

const person = createPerson("John");
console.log(person.getName()); // Returns 'John'
```

In this example, `name` is encapsulated and cannot be accessed directly from outside. It can only be accessed via the `getName` function, thus preserving the privacy of the `name` variable.
