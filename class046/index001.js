// setInterval e setTimeout
function returnHour() {
    let date = new Date();
    
    return date.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

function functionTheSetInterval() {
    console.log(returnHour());
}

setInterval(functionTheSetInterval, 1000); // de 1 em 1 seg