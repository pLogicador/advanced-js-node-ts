try {
    // Simulate operations that may throw errors
    console.log('Opened a file');
    console.log('Processed the file and encountered an error');
    console.log('Closed the file');

    // Nested try-catch block to capture specific errors
    try {
        // Simulate error
        console.log(b); // Variable 'b' is not defined
    } catch (err) {
        // Capture and handle the specific error
        console.log('Error accessing variable:', err.message);
    } finally {
        // Always executed after the nested try-catch block
        console.log('This finally block is always executed.');
    }

} catch (e) {
    // Capture and handle any error from the outer try block
    console.log('Error handling in the outer block:', e.message);
} finally {
    // Always executed after the outer try-catch block
    console.log('This finally block is always executed, regardless of errors.');
}
