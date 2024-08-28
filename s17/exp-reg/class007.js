// Importing HTML for testing
const { html2 } = require('./base');

// Explanation of used concepts:
// ${1}, ${2}, ${3} -> References to groups within the regular expression
// \1       -> References the first capture group
// .*       -> Dot All, matches any character (excluding new lines) greedily
// [\s\S]   -> Matches any character (including new lines), used to handle line breaks

console.log(html2);
console.log('\n\n');

// Finding and extracting HTML tags and their content using groups and backreferences
console.log(html2.match(/<(\w+)[\s\S]*?>[\s\S]*?<\/\1>/g)); // Captures tags and their content

// Using groups and backreferences to show tag content
console.log(html2.replace(/<(\w+)[\s\S]*?>([\s\S]*?)<\/\1>/g, '$1 $2')); // Displays tag name and its content
console.log(html2.replace(/(<(\w+)[\s\S]*?>)([\s\S]*?)(<\/\2>)/g, '$1')); // Displays only the start of the tags

// Rebuilding the original expression
console.log(html2.replace(/(<(\w+)[\s\S]*?>)([\s\S]*?)(<\/\2>)/g, '$1$3$4')); // Rebuilds the original expression

// Adding quotes around tag content
console.log(html2.replace(/(<(\w+)[\s\S]*?>)([\s\S]*?)(<\/\2>)/g, '$1"$3"$4')); // Adds quotes around tag content

// Adding text around tag content
console.log(html2.replace(/(<(\w+)[\s\S]*?>)([\s\S]*?)(<\/\2>)/g, '$1 Haaaha $3 Haaaha $4')); // Adds "Haaaha" around tag content

// Excluding capturing group to avoid saving in memory
console.log(html2.replace(/(<(\w+)(?:[\s\S]*?)>)([\s\S]*?)(<\/\2>)/g, '$1 Haaaha $3 Haaaha $4')); // Uses `(?:)` to avoid saving in memory
