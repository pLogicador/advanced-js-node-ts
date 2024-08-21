function clock() {
    const CLOCK_DISPLAY = document.querySelector('.clock');
    const INITIAL_TIME = '00:00:00';
    const START_CLASS = 'starting';
    const PAUSE_CLASS = 'paused';

    let seconds = 0;
    let timer;

    const formatTime = (seconds) => {
        const date = new Date(seconds * 1000);
        return date.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        });
    };

    const updateClockDisplay = () => {
        CLOCK_DISPLAY.innerHTML = formatTime(seconds);
    }

    const startClock = () => {
        timer = setInterval(() => {
            seconds++;
            updateClockDisplay();
        }, 1000);
    }

    const pauseClock = () => {
        clearTimer();
        setClockStateClass(PAUSE_CLASS);
    }

    const resetClock = () => {
        clearTimer();
        seconds = 0;
        CLOCK_DISPLAY.innerHTML = INITIAL_TIME;
        setClockStateClass();
    }

    const clearTimer = () => {
        clearInterval(timer);
    }

    const setClockStateClass = (activeClass) => {
        CLOCK_DISPLAY.classList.remove(START_CLASS, PAUSE_CLASS);
        if (activeClass) {
            CLOCK_DISPLAY.classList.add(activeClass);
        }
    }

    const handleClickEvent = (event) => {
        const element = event.target;

        if (element.classList.contains('reset')) {
             resetClock();
        }

        if (element.classList.contains('pause')) {
            pauseClock();
        }

        if (element.classList.contains('start')) {
            setClockStateClass(START_CLASS);
            clearTimer();
            startClock();
        }
    }

    document.addEventListener('click', handleClickEvent);
}

clock();
