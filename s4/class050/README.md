> In JavaScript, function parameter handling can be done in several ways, each providing flexibility for different use cases.

### 1. The `arguments` Object:

- **Description**: For functions declared with function or function expressions, a special object called arguments is automatically created. This object is an array-like structure containing all arguments passed to the function.
- **Usage**: Useful for handling a variable number of arguments and accessing passed arguments without explicitly defining all parameters in the function declaration.
- **Limitation**: Does not work with arrow functions and is considered less modern compared to using REST parameters.

### 2. Explicit Parameters:

- **Description**: These are parameters defined in the function declaration. When fewer arguments are passed than the number of defined parameters, the missing parameters are automatically assigned as undefined.
- **Usage**: Provides clear definitions of the expected parameters and ensures clarity in the code.

### 3. Default Parameter Values:

- **Description**: Allows setting default values for parameters in the function declaration. If an argument is not provided for that parameter, the default value is used.
- **Usage**: Useful for defining default values for parameters without needing additional logic inside the function.
- **Outdated Method**: The logical `||` operator was used to set default values, which is considered less robust compared to modern syntax.

### 4. REST Parameters:

- **Description**: Allows a function to accept a variable number of arguments as an array. This is done using the ...rest syntax in the function parameters.
- **Usage**: Ideal for functions that need to handle a variable number of arguments, especially when the number of arguments is unknown.

</br>

# Destructuring Objects and Arrays in JavaScript

### 1. Object Destructuring as a Parameter:

- **Description**: Allows extracting values directly from an object passed as an argument to a function. This is achieved by defining the expected structure of the object directly in the function parameters.
- **Usage**: Simplifies extracting specific properties from an object without the need to access them individually within the function.
- **Example**: In `function printPersonInfo({ nome, sobrenome, idade })`, the values of `nome`, `sobrenome`, and `idade` are directly extracted from the object passed to the function.

### 2. Array Destructuring as a Parameter:

- **Description**: Allows extracting values directly from an array passed as an argument to a function. Similar to object destructuring, this is done by defining the expected structure of the array directly in the function parameters.
- **Usage**: Simplifies extracting specific elements from an array without the need to access them individually within the function.
- **Example**: In `function printValues([valor1, valor2, valor3])`, the values of `valor1`, `valor2`, and `valor3` are directly extracted from the array passed to the function.

### 3. Rest Operator (`...`):

- **Description**: The rest operator (`...`) allows capturing a variable number of arguments passed to a function and grouping them into an array. It must be the last parameter in the function's parameter list.
- **Usage**: Ideal for functions that need to handle an indeterminate number of arguments or when the amount of data is dynamic.
- **Example**: In `function calculate(operador, acumulador, ...numeros)`, the rest operator captures all additional arguments after `acumulador` and groups them into an array called `numeros`.
