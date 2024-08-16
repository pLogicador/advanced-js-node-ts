# Destructuring Assignment (Arrays)

> Destructuring in JavaScript allows you to extract values from arrays and objects and assign them to variables in a clear and
> concise manner. When applied to arrays, you can easily reorder or reassign values from a single array, improving code readability.

- Example: `const [a, b] = [1, 2];` — Assigns `1` to `a` and `2` to `b`.
- Skipping values: You can skip elements while destructuring by leaving a position empty between commas, like in `const [x, , y] = [1, 2, 3];` (here, `x` gets `1` and `y` gets `3`).
- `...rest` and `...spread Operators`: The `...rest operator (...)` allows you to capture all remaining values from an array into
  a new variable. The `...spread operator (...)` spreads the elements of an array into another structure, whether a new array or a function.

### In addition to the main points covered earlier, array destructuring in JavaScript offers advanced functionalities and nuances that can be useful in various scenarios:

- Default Values: You can set default values for variables during destructuring. This is helpful when arrays might have undefined
  or missing elements. Example: `const [a = 1, b = 2] = [undefined];` — `a` will be `1` and `b` will be `2`.

- Nested Destructuring: It is possible to destructure nested arrays in a single expression.
  Example: `const [a, [b, c]] = [1, [2, 3]];` — a will be 1, b will be 2, and c will be 3.

- Variable Swapping: Destructuring can be used to swap values between variables without needing a temporary variable.
  Example: `[a, b] = [b, a];` — This swaps the values of `a` and `b`.

- Rest vs. Spread: The `...rest` operator captures the remaining elements of an array into a new variable,
  while the `...spread` operator expands array elements into another context, such as function arguments or when creating a copy of an array.

- Use with Functions: Destructuring is often used to extract values from arrays returned by functions or to pass arguments in a
  more organized way. Example: `function example([a, b, c]) { ... }`.
