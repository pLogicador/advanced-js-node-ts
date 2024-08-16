# Differences between let and var, and the concept of Hoisting

- `let`: It has block scope ({ ... }) and cannot be redeclared in the same scope.
- `var`: It has function scope and can be redeclared within the same function scope.

> In the case of `let`, the variable is available only within the block where it was declared. However, `var` has function scope, > which means that the same variable can be accessed and modified anywhere within the function.

# Hoisting

> This is a JavaScript behavior where variable and function declarations are hoisted to the beginning of their scope during
> compilation. This means that you can use variables and functions before they are declared in the code.

- `let`: Has block scope and is subject to hoisting, but cannot be accessed before its declaration due to the `temporal dead zone`
  (TDZ). This means the variable is hoisted to the beginning of the block but cannot be used until declared.

- `var`: Has function scope and is subject to hoisting. The declaration of the variable is hoisted to the beginning of the
  function scope, but its initialization stays in its original position. This allows the variable to be accessed before its
  declaration in the code, but its value will be undefined until it is initialized.

# Details

## let:

- Scope:
  > let has block scope, meaning the variable is only visible within the block of code where it was declared. Blocks can be defined
  > by curly braces {} in constructs like if, for, while, etc.
- Hoisting:
  > Although let is subject to hoisting, the variable is not initialized until the declaration point in the code.
  > Attempting to access the variable before its declaration results in a reference error.
- Redeclaration:
  > A variable declared with let cannot be redeclared within the same block scope. This helps to avoid accidental errors where a
  > variable might be inadvertently overwritten.

## var:

- Scope:
  > var has function scope, meaning the variable is visible throughout the function in which it was declared, regardless of any
  > inner blocks. If a var variable is declared within a block (such as an if or for), it is still visible throughout the function.
- Hoisting:
  > var is affected by hoisting, which means the variable declaration is moved to the top of the function scope. However, the
  > variable initialization occurs where it was defined in the code. The variable is initialized with undefined if accessed before
  > assignment.
- Redeclaration:
  > Variables declared with var can be redeclared within the same function scope. This can lead to code maintenance issues,
  > as redeclaration can occur inadvertently and cause unexpected behaviors.

## Hoisting with function:

> Functions declared with function have both the declaration and the definition elevated to the top of the scope.
> This means you can call the function before its definition in the code.

## Hoisting com const e Funções Anônimas:

> Anonymous functions assigned to a variable declared with `const` are not hoisted.
> Attempting to access a function before its definition results in a `ReferenceError` error.
