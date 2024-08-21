// setInterval and setTimeout - Using `setInterval()`
// Function to get the current time in 24-hour format
function getCurrentTime() {
    const date = new Date();
    return date.toLocaleTimeString('pt-BR', { hour12: false });
}

// Function to log the current time to the console
function displayTime() {
    console.log(getCurrentTime());
}

// Call 'displayTime' every second (1000ms)
setInterval(displayTime, 1000);
