// Lexical Scope

const name = 'Pedro'; // Global variable

function speakName() {
    console.log(name); // Lexical scope allows access to 'name' from the outer scope
}

function useSpeakName() {
    const name = 'Miranda';  // This 'name' is declared inside 'useSpeakName' scope
    speakName(); // Calls the 'speakName' function which will access the outer 'name' variable
}

useSpeakName();  // Output: Pedro

/*
    When 'speakName' is called inside 'useSpeakName', it accesses the variable 'name'
    from its own lexical scope, which includes the global 'name' variable 'Pedro'. 
    Therefore, the output will be 'Pedro', not the 'name' declared within 'useSpeakName'.
*/
