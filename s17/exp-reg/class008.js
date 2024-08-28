// Lookahead and Lookbehind
// Importing the text for testing
const { lookahead } = require('./base');

// Displaying the test text
console.log(lookahead);

// Examples of Lookahead and Lookbehind (Lookaround):

// 1. Positive Lookahead (lines containing "active" but not "inactive")
console.log(lookahead.match(/.+(?=[^in]active)/gim)); 
// This pattern captures lines that contain "active" and do not contain "inactive". The positive lookahead (assertion) checks the condition without consuming characters.

console.log(lookahead.match(/.+(?=\s+inactive)/gim)); 
// This pattern captures lines containing the word "inactive", preceded by at least one space. The positive lookahead ensures the presence of "inactive".

// 2. Negative Lookahead (lines not containing "active")
console.log(lookahead.match(/^(?!.+[^in]active).+$/gim)); 
// This pattern captures lines that do not contain the word "active". The negative lookahead (assertion) ensures that "active" is not present.

console.log(lookahead.match(/^(?!.*active).+$/gim)); 
// Alternative to check if "active" is not present. The negative lookahead ensures that "active" does not appear anywhere in the line.

// 3. Positive Lookbehind (lines starting with "ONLINE")
console.log(lookahead.match(/(?<=ONLINE\s+)\S.*/gim)); 
// This pattern captures any line that starts with "ONLINE" followed by one or more spaces. The positive lookbehind (assertion) confirms the presence of "ONLINE" at the beginning of the line.

console.log(lookahead.match(/(?<=ONLINE\s+)\S.*/gim)); 
// Captures anything after "ONLINE" and one or more spaces, excluding "ONLINE" from the capture.

 // 4. Negative Lookbehind (lines NOT starting with "ONLINE")
console.log(lookahead.match(/^(?<!ONLINE\s+).+$/gim)); 
// This pattern captures lines that do not start with "ONLINE". The negative lookbehind ensures that "ONLINE" is not at the start of the line.

const cpf = `
012.250.796-10
000.000.000-01
111.111.111-11
147.285.963-10
aaa.bbb.ccc-dd
`;

// Displaying CPF text
console.log(cpf);

// 5. Capture valid CPF numbers
console.log(cpf.match(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/gm)); 
// Captures CPFs in the correct format with dots and hyphen, one per line.

// 6. Exclude CPF with repeated digits (e.g., "111.111.111-11")
console.log(cpf.match(/^(?!^(\d)\1{2}\.\1{3}\.\1{3}-\1{2}$)\d{3}\.\d{3}\.\d{3}-\d{2}$/gm)); 
// Captures valid CPFs that do not contain repeated sequences of numbers. The negative lookahead ensures that the CPF is not a repetitive sequence.
