// setInterval and setTimeout - Using `setTimeout()`
// Using anonymous function
function returnHour() {
    const date = new Date();
    return date.toLocaleTimeString('pt-BR', { hour12: false });
}

// Starts a timer that logs the current time every second
const timer = setInterval(() => {
    console.log(returnHour());
}, 1000); 

// Stops the timer after 10 seconds
setTimeout(() => {
    clearInterval(timer);
}, 10000); 

// Displays a message after 5 seconds
setTimeout(() => {
    console.log('Hello!!');
}, 5000); 
