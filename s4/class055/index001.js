// Immediately Invoked Function Expression (IIFE)

// Example 1: IIFE without parameters
(function() {
    const name = 'Pedro';
    console.log(name);
})();   

// Declaring a global variable for comparison
const name = 'Miranda';

// Example 2: IIFE with parameters
(function(age, weight, height) {
    console.log(age, weight, height);
})(20, 75, 1.80);  
