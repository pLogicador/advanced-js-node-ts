// Function return

/*
    return
        - Returns a value.
        - Ends the function execution.

    Note:
        Some functions return a value, while others do not. It depends on the context.

    Example:
        document.addEventListener('click', function() {
            document.body.style.background = "black";
        });
        // This function doesn't return anything but performs an action.

    Example 2:
*/

// Function that returns an object
function createPerson(firstName, lastName) {
    return { firstName, lastName };
}

const person1 = createPerson("Pedro", "Miranda");
const person2 = {
    firstName: 'Pedro', 
    lastName: 'Miranda'
};

console.log(typeof person1); // Output: object
console.log(typeof person2); // Output: object
