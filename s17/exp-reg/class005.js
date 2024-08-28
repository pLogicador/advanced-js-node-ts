// Character Sets and Ranges
// Import alphabet for testing
const { alfabeto } = require('./base');

// Character Sets and Ranges in Regular Expressions
console.log(alfabeto);

// Finds groups containing any combination of the letters 'a', 'b', 'c', or numbers '1', '2', '3'
console.log("Character Set [abc123]:", alfabeto.match(/[abc123]+/g)); 

// Finds all characters that are not 'a', 'b', 'c', '1', '2', '3' (negation with ^)
console.log("Negation [^abc123]:", alfabeto.match(/[^abc123]/g)); 

// Finds all digits (0-9) in the text
console.log("Range [0-9]:", alfabeto.match(/[0-9]/g)); 

// Finds groups of consecutive digits, skipping non-numeric characters
console.log("Range with quantifier [0-9]+:", alfabeto.match(/[0-9]+/g)); 

// Finds uppercase, lowercase letters, and numbers (A-Z, a-z, 0-9)
console.log("Multiple ranges [A-Za-z0-9]:", alfabeto.match(/[A-Za-z0-9]+/g)); 

// Finds letters with accents or special characters (including 'ç' and 'ã')
console.log("Range with accented letters [A-Za-z0-9çã]:", alfabeto.match(/[A-Za-z0-9çã]+/g)); 

// Uses the Unicode range to find specific characters
console.log("Unicode [\u00A0-\u00BA]:", alfabeto.match(/[\u00A0-\u00BA]+/g)); 

// Shortcuts for predefined sets
console.log("Shortcut for letters, numbers, and underscore (\\w+):", alfabeto.match(/\w+/g)); // Equivalent to [A-Za-z0-9_]
console.log("Shortcut for non-word characters (\\W):", alfabeto.match(/\W/g)); // Equivalent to [^A-Za-z0-9_]
console.log("Shortcut for digits (\\d+):", alfabeto.match(/\d+/g)); // Equivalent to [0-9]
console.log("Shortcut for non-digits (\\D+):", alfabeto.match(/\D+/g)); // Equivalent to [^0-9]
console.log("Shortcut for whitespace (\\s+):", alfabeto.match(/\s+/g)); // Equivalent to [ \t\n\r\f\v]
console.log("Shortcut for non-whitespace (\\S+):", alfabeto.match(/\S+/g)); // Equivalent to [^ \t\n\r\f\v]
