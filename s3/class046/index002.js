// setInterval e setTimeout
// utilizando função anonima
function returnHour() {
    let date = new Date();
    
    return date.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}


const timer = setInterval(function (){
    console.log(returnHour());
}, 1000); // de 1 em 1 seg

setTimeout(function (){
    clearInterval(timer);
}, 10000); // para após 10 sec

setTimeout(function (){
    console.log('Hello!!');
}, 5000);