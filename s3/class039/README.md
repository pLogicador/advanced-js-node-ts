# `while` Loop

> The `while` loop in JavaScript is used to repeatedly execute a block of code as long as a specified condition remains true.
> The condition is evaluated `before` the execution of the code block, meaning that if the condition is false at the
> beginning, the code block will never execute.

**Syntax**:

```javascript
while (condition) {
  // Code to be executed while the condition is true
}
```

**Contexts for Use**:

- **When you want to loop while a condition is true**: The while loop is ideal when the number of iterations is not known upfront and depends on a condition evaluated during runtime.

- **When you need to validate the condition before execution**: It is useful for scenarios where you want to ensure the loop runs only if the condition is true at the start.

**Example**:

```javascript
let count = 0;

while (count < 5) {
  console.log(count);
  count++;
}
```

In this example, the `while` loop runs as long as the `count` is less than 5. When `count` reaches 5, the loop stops.

**Advantages**:

- **Precise control**: The `while` loop provides precise control when dealing with dynamic conditions that can change during the program's execution.
- **Efficient use of resources**: The code block can be skipped entirely if the initial condition is false, avoiding unnecessary execution.

**Disadvantages**:

- **Risk of infinite loops**: If the condition never becomes false, the loop will run indefinitely, potentially freezing the program.
- **No guaranteed execution**: If the condition starts as false, the loop will be skipped, which may not be desired in some situations.

</br>

#

# `do...while` Loop

> The `do...while` loop also allows you to create loops, but with one key difference: it guarantees that the code block will
> be executed at least `once`, even if the condition is false on the first check. The condition is evaluated `after` the code
> block is executed.

**Syntax**:

```javascript
do {
  // Code to be executed at least once
} while (condition);
```

**Contexts for Use**:

- **When you need to ensure the code runs at least once**: The `do...while` loop is perfect for situations where the code block must be executed before checking the condition.
- **When the condition depends on something inside the block**: It’s useful in cases where the condition is generated or modified within the loop itself.

**Example**:

```javascript
let count = 0;
do {
  console.log(count);
  count++;
} while (count < 5);
```

In this example, the code block will execute once before the condition is checked. Even if `count` starts at 5, the block will execute once before stopping.

**Advantages**:

- **Guaranteed execution**: The `do...while` loop ensures that the code block is executed at least once, which is useful for initialization, processing input, or operations that must occur before evaluating the condition.

- **Simplicity for certain logic**: It simplifies situations where you need at least one iteration of the loop before checking a condition.

**Disadvantages**:

- **Potential for unwanted execution**: In some cases, the guaranteed execution of the code block may not be desirable or could cause issues.
- **Risk of infinite loops**: Like any loop, there is a risk of creating infinite loops if the condition never becomes false.

#

# Differences Between `while` and `do...while`

- **Condition evaluation**: In `while`, the condition is evaluated **before** the code block executes. In `do...while`, the condition is evaluated **after** the code block executes.
- **Guaranteed execution**: The `while` loop may never execute if the condition is false from the start. The `do...while` loop always executes the code block at least once, regardless of the condition.
- **Common usage**: The `while` loop is often used when the repetition depends on a condition that may be false from the beginning. The `do...while` loop is more suitable when the code block needs to execute at least once before the condition is checked.
