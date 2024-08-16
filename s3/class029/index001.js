/* Switch/Case
- The "switch" statement is a control structure that allows you to compare the value of a single variable against multiple cases. 
It helps make the code more readable when dealing with several possible values for one variable.

Note: "Switch" is best suited for situations with a single variable and multiple cases. For more complex scenarios or 
multiple conditions, if-else structures might be more appropriate.

Note: In a switch statement, you need to provide an explicit way to exit each case, typically using the break statement. 
This is because, unlike if-else, the switch will continue executing all subsequent cases after finding a match, 
unless it's interrupted. Without break, the code would "fall through" to the next case, even if the condition has 
already been met. This behavior is known as "fall-through"(the act of letting something slip between your fingers). 
*/

const date = new Date('1987-09-12 00:00:00');
let dayOfWeek = date.getDay();
dayOfWeek = 0; // Setting a value for the example
let dayOfWeekText = '';

// Using Switch/Case to check the value of a variable
switch (dayOfWeek) {
    case 0:
        dayOfWeekText = 'Sun';
        break;
    case 1:
        dayOfWeekText = 'Mon';
        break;
    case 2:
        dayOfWeekText = 'Tue';
        break;
    case 3:
        dayOfWeekText = 'Wed';
        break;
    case 4:
        dayOfWeekText = 'Thu';
        break;
    case 5:
        dayOfWeekText = 'Fri';
        break;
    case 6:
        dayOfWeekText = 'Sat';
        break;
    default:
        dayOfWeekText = 'Invalid day';
}

console.log(dayOfWeek, dayOfWeekText);
