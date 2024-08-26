# Recursive Functions

> Recursive functions are functions that call themselves during their execution. They are useful for solving problems that can be divided into similar subproblems.

## How It Works:

### 1. Recursive Call:

- The function calls itself with a new set of parameters. Each call may have its own values and state.

### 2. Stopping Condition:

- It is crucial to define a stopping condition to prevent infinite recursion. Without a proper stopping condition, the function might continue calling itself indefinitely, leading to a stack overflow error.

### 3. Stack Overflow Error:

- If the recursive function makes an excessive number of calls, you may encounter the 'maximum call stack size exceeded' error. This occurs because the call stack, where function call information is stored, has a limit.

## When to Use:

- **Problems Divided into Subproblems**: When a problem can be divided into similar subproblems.
- **Recursive Data Structures**: To traverse data structures that are naturally recursive, such as trees and graphs.
