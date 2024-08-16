# Short Circuit

> "Short-circuit evaluation without conditional structures" refers to the use of logical operators directly to
> determine the result of an expression without employing traditional conditional statements like `if`, `else`, or `switch`.

- `&& (AND)`: Returns the first falsy value encountered when evaluating from left to right. If all values are truthy,
  it returns the last truthy value.
- `|| (OR)`: Returns the first truthy value encountered when evaluating from left to right. If all values are falsy, it returns the last falsy value.

## FALSY VALUES:

> In JavaScript, the following values are considered "falsy" in a boolean context:

```javascript
false
0
''  ""  `` // Empty strings
null
undefined
NaN
```
