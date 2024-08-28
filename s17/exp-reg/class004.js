// Greedy and Lazy Matching
// Import HTML content for testing
const { html } = require('./base');

// Display the HTML content
console.log(html);

// Greedy Example
// Captures the maximum number of characters possible, from the first opening tag to the last closing tag
console.log("Greedy Matching:", html.match(/<.+>.+<\/.+>/g)); 

// Lazy Example
// Captures the minimum number of characters possible, stopping after the first valid tag closure
console.log("Lazy Matching:", html.match(/<.+?>.+?<\/.+?>/g));
