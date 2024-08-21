// DOM element selectors
const clockDisplay = document.querySelector('.clock');
const startButton = document.querySelector('.start');
const pauseButton = document.querySelector('.pause');
const resetButton = document.querySelector('.reset');

// Control variables
let seconds = 0;
let timer;

// Function to convert seconds to time format (00:00:00)
function formatTime(seconds) {
    const date = new Date(seconds * 1000);
    return date.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}

// Function to start the clock
function startClock() {
    timer = setInterval(() => {
        seconds++;
        clockDisplay.innerHTML = formatTime(seconds);
    }, 1000);
}

// Function that handles the click on the "Start" button
startButton.addEventListener('click', () => {
    clockDisplay.classList.remove('paused');
    clockDisplay.classList.add('starting');
    clearInterval(timer); // Ensures there are not multiple active timers
    startClock();
});

// Function that handles the click on the "Pause" button
pauseButton.addEventListener('click', () => {
    clockDisplay.classList.remove('starting');
    clockDisplay.classList.add('paused');
    clearInterval(timer); // Pause the clock
});

// Function that handles the click on the "Reset" button
resetButton.addEventListener('click', () => {
    clockDisplay.classList.remove('starting', 'paused');
    clearInterval(timer); // Reset the clock
    clockDisplay.innerHTML = '00:00:00';
    seconds = 0;
});
