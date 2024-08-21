function clock() {
    const clockDisplay = document.querySelector('.clock');
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

    // Function to start the clock
    function startClock(){
        timer = setInterval(() => {
            seconds++;
            clockDisplay.innerHTML = formatTime(seconds);
        }, 1000);
    }

    // Main function that handles click events
    document.addEventListener('click', function(event){
        const element = event.target;

        // Reset button logic
        if (element.classList.contains('reset')) {
            clockDisplay.classList.remove('starting', 'paused');
            clearInterval(timer); // Stop the clock
            clockDisplay.innerHTML = '00:00:00'; // Reset the display
            seconds = 0; // Reset the seconds counter
        }

        // Pause button logic
        if (element.classList.contains('pause')) {
            clockDisplay.classList.remove('starting');
            clockDisplay.classList.add('paused');
            clearInterval(timer);
        }

        // Start button logic
        if (element.classList.contains('start')) {
            clockDisplay.classList.remove('paused');
            clockDisplay.classList.add('starting');
            clearInterval(timer); // Avoid multiple timers
            startClock(); // Start the clock
        }
    });
}

clock();
