function returnHour(date) {
    if  (date && !(date instanceof Date)) {
        throw new TypeError('Esperando instancia de Date');
    }

    if (!date) {
        date = new Date();
    }
    return date.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}
try {
    const DATE = new Date('01-01-1970 12:58:10');
    const HOUR = returnHour(DATE);
    console.log(HOUR);

} catch (err) {
    // tratar erro
    //console.log(err);
} finally {
    console.log('Bye!');
}