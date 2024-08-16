function clock() {
    const CLOCK = document.querySelector('.clock');
    let seconds = 0;
    let timer;

    function createTimeOfSeconds(seconds) {
        const DATE = new Date(seconds * 1000);
        return DATE.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        });
    }

    function startClock(){
        timer = setInterval(function(){
            seconds++;
            CLOCK.innerHTML = createTimeOfSeconds(seconds);
        }, 1000);
    }

    document.addEventListener('click', function(event){
        const ELEMENT = event.target;

        if (ELEMENT.classList.contais('reset')) {
            CLOCK.classList.remove('starting');
            CLOCK.classList.remove('paused');
            clearInterval(timer);
            CLOCK.innerHTML = '00:00:00';
            seconds = 0;
        }

        if (ELEMENT.classList.contais('pause')) {
            CLOCK.classList.remove('starting');
            CLOCK.classList.add('paused');
            clearInterval(timer);
        } 
        
        if (ELEMENT.classList.contais('start')) {
            CLOCK.classList.remove('paused');
            CLOCK.classList.add('starting');
            clearInterval(timer);
            startClock();
        }
    });

}

clock();