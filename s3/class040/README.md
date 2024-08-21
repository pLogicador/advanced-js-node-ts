# About `break` & `continue`

## `break` and `continue` are flow control statements used to alter the behavior of loops (`for`, `while`, `do while`). They help manage the execution of code within loops by allowing you to exit a loop prematurely or skip specific iterations.

### 1. `break` Statement

- **Context of Use**:

  - Used to terminate the execution of a loop (`for`, `while`, `do while`) and exit it immediately.
  - Typically applied when a specific condition is met and there is no need to continue the loop.

- **Advantages**:

  - Allows for early termination of the loop, saving time and resources, especially if the termination condition is encountered early.
  - Helps avoid unnecessary processing and improves code efficiency.

- **Disadvantages**:
  - Can make the code less predictable if not used carefully, as the loop's termination logic may not be immediately clear.
  - Can create implicit dependencies on certain conditions, making the code harder to maintain and read.

### 2. `continue` Statement

- **Context of Use**:

  - Used to skip the current iteration of a loop and immediately proceed to the next iteration.
  - Useful when certain conditions need to be ignored, but the loop should continue running for other values.

- **Advantages**:

  - Allows skipping specific iterations without terminating the entire loop, which can be useful for filtering or handling exceptions.
  - Improves readability by avoiding the need for additional conditional structures within the loop.

- **Disadvantages**:
  - Can result in a loop with multiple conditional checks, potentially making the code more complex.
  - If not used carefully, can lead to confusing loops where the flow of execution is not immediately clear.
