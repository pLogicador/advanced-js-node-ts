/* if else (1)
- The 'if' can be used alone
- The 'else' always depends on a previous 'if'.
- There can only be one 'else' block and it must come after all 'if' and 'else if' blocks.

Example:
Between 0 e 11: Good morning!
Between 12 e 17: Good afternoon!
Between 18 e 23: Good night!
*/

const hour = 0;

if (hour >= 0 && hour <= 11) {
    console.log('Good morning!')
} else if (hour >= 12 && hour <= 17 ) {
    console.log('Good afternoon!') 
} else if (hour >= 18 && hour <= 23) {
    console.log('Good night!')
} else {
    console.log('Invalid hour!');
}
