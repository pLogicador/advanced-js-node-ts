# `try`, `catch`, and `throw`

> Error handling in JavaScript can be managed using `try`, `catch`, and `throw` blocks. These blocks allow you to catch and handle errors in a controlled manner, ensuring that your program continues to run smoothly even when issues arise.

### `try` and `catch` Blocks

- **`try`**: The `try` block contains the code you want to execute that might throw an error. If an error occurs, the execution of code inside the `try` block is halted and control is transferred to the `catch` block.

- **`catch`**: The `catch` block is responsible for capturing and handling the error. The parameter `error` (or any name you choose) represents the error object containing details about what went wrong. You can display a user-friendly message or log the error for further analysis.

### Throwing Errors with `throw`

- **`throw`**: The `throw` statement is used to manually throw an error. You can create an instance of the `Error` class and provide a descriptive message. This error will be caught by the corresponding `catch` block.
