// Recursive Functions

/**
 * A recursive function is a function that calls itself during its execution.
 * 
 * Below is an example of a recursive function that prints values of a counter,
 * incrementing it with each call until the stopping condition is met.
 * 
 * It is essential to define a stopping condition to avoid infinite recursion. 
 * In the example, the condition 'if (max >= 10) return;' prevents the function 
 * from continuing to call itself when 'max' reaches 10.
 * 
 * Note: Excessive recursive calls can lead to a 'maximum call stack size exceeded' error,
 * which occurs when the number of recursive calls exceeds the stack size limit.
 */

// Recursive function
function recursive(max) {
    console.log(max); // Prints the current value of 'max'

    if (max >= 10) return; // Stopping condition: ends recursion when 'max' is 10 or more

    max++; // Increments the value of 'max'
    recursive(max); // Calls the function recursively with the new value of 'max'
}

// Calling the recursive function with an initial value
recursive(-10);
