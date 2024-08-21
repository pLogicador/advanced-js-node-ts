function returnHour(date) {
    // Check if the input is provided and is not an instance of Date
    if (date && !(date instanceof Date)) {
        throw new TypeError('Expected an instance of Date');
    }

    // If no date is provided, use the current date and time
    if (!date) {
        date = new Date();
    }

    // Return the time in 'pt-BR' locale format (24-hour clock)
    return date.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false // Use 24-hour time format
    });
}

try {
    // Create a Date object and get the formatted time
    const date = new Date('1970-01-01T12:58:10'); // ISO 8601 format for better date parsing
    const hour = returnHour(date);
    console.log(hour);
} catch (err) {
    // Handle any errors that occur
    console.error('An error occurred:', err.message);
} finally {
    // This block always executes, regardless of success or error
    console.log('Bye!');
}
