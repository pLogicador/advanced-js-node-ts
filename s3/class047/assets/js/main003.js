function clock() {
    const CLOCK_DISPLAY = document.querySelector('.clock');
    const INITIAL_TIME = '00:00:00';
    const START_CLASS = 'starting';
    const PAUSE_CLASS = 'paused';

    let seconds = 0;
    let timer;

    // Function to format the seconds in a time string in the format 00:00:00
    function formatTime(seconds) {
        const date = new Date(seconds * 1000);
        return date.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        });
    }

    // Update the clock display
    function updateClockDisplay() {
        CLOCK_DISPLAY.innerHTML = formatTime(seconds);
    }

    // Function to start the clock
    function startClock(){
        timer = setInterval(() => {
            seconds++;
            updateClockDisplay();
        }, 1000);
    }

    // Function to clear the timer
    function clearTimer() {
        clearInterval(timer);
    }

    // Update clock classes
    function updateClockClass(activeClass) {
        CLOCK_DISPLAY.classList.remove(START_CLASS, PAUSE_CLASS);
        if (activeClass) {
            CLOCK_DISPLAY.classList.add(activeClass);
        }
    }

    // Function to reset the clock
    function resetClock() {
        clearTimer();
        seconds = 0;
        CLOCK_DISPLAY.innerHTML = INITIAL_TIME;
        updateClockClass();

    }

    // Function to pause the clock
    function pauseClock() {
        clearTimer();
        updateClockClass(PAUSE_CLASS);
    }

    // Function to start the clock
    function handleStartClock() {
        clearTimer();
        updateClockClass(START_CLASS);
        startClock();
    }

    // Main function that handles click events
    function handleClickEvent(event) {
        const element = event.target;

        if (element.classList.contains('reset')) {
             resetClock();
        }

        if (element.classList.contains('pause')) {
            pauseClock();
        }

        if (element.classList.contains('start')) {
            handleStartClock();
        }
    }

    // Add the click event to the document
    document.addEventListener('click', handleClickEvent);
}

clock();
