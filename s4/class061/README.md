# **Generator Functions**

> Generator functions are a powerful feature in JavaScript that allow you to create custom iterators. They can pause and resume execution, which is useful for creating sequences of values lazily (on demand).

## **Context of Use**:

### 1. **Creating Sequences of Values**:

Generator functions can be used to create sequences of values that are produced and consumed as needed. This is useful for working with large data sets or for creating data streams that can be processed on demand.

### 2. **Delegating to Other Generators**:

You can delegate value production to other generator functions, helping to organize code and reuse existing generators.

### 3. **Dynamic Functions and Objects**:

Generator functions can produce functions as values, allowing for dynamic function creation based on the generator logic.

### **Examples:**

- **Simple Generator**: Creates a fixed sequence of values.
- **Infinite Generator**: Creates an infinite sequence of values, useful for generating values on demand.
- **Delegation**: Allows combining values from different generators.
- **Generating Functions**: Produces functions that can be executed later.
