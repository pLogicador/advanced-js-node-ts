/*  Ternary Operator (? :)
- The ternary operator is a concise way to perform a conditional check in a single line. 
It evaluates a condition and returns one value if the condition is true and another value if it is false.
 
(condition) ? valueIfTrue : valueIfFalse
 */
// Example 1
const userScore = 999;
const userLevel = userScore >= 1000 ? 'VIP User' : 'Normal User';

console.log(userLevel); // Output: 'Normal User'

/* // Equivalent code using if-else: 
if (userScore >= 1000) {
    console.log('VIP User');
} else {
    console.log('Normal User');
}
*/

// Example 2: The logical || (OR) operator is used to set a default (fallback) value when a variable has a "falsy" value
const userColor = null;
const defaultColor = userColor || 'black';

console.log(`User Level: ${userLevel}, Default Color: ${defaultColor}`);
