// Example difference between let and var
const isTrue = true;
let nameLet = 'Pedro'; 
var nameVar = 'Pedro'; 

var nameVar = 'Miranda';  // Redefining the 'var' variable
console.log(nameLet, nameVar);  // Output: Pedro Miranda

if (isTrue) {
    let nameLet = 'pLogicador';  // New variable 'let' inner block
    var nameVar = '123';  // Redefining the 'var' variable inner block
    console.log(nameLet, nameVar);  // Output: pLogicador 123

    if (isTrue) {
        var nameVar = '...';  // Redefining the 'var' variable again inside the inner block
        console.log(nameLet, nameVar);  // Output: pLogicador ...
        // let nameLet = '...';  // Declaring a new 'let' variable here would cause a "Variable already declared" error
    }
}

// Displaying the final value of variables in the global scope
console.log(nameLet, nameVar);  // Output: Pedro ...
