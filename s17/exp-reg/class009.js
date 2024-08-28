// Notes and Patterns for Validation

// Link to test your expressions: https://regex101.com/

// Find all words (including accented characters)
const wordsRegExp = /([\wÀ-ú]+)/g;

// Remove non-numeric characters from text
const notNumbersRegExp = /\D/;

// Validate IP addresses
const ipRegExp = /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g;

// Validate CPF (Brazilian Individual Taxpayer Registry)
const cpfRegExp = /(?:\d{3}\.){2}\d{3}-\d{2}/gm;

// Validate phone numbers (Brazilian format)
const phoneRegExp = /^(\(\d{2}\)\s*)?(9\s*)?(\d{4})-(\d{4})$/gm;

// Validate US phone numbers (North American format)
const usPhoneRegExp = /^(\+1\s?)?(\(\d{3}\)\s?|\d{3}[-.\s])\d{3}[-.\s]\d{4}$/gm;

// Minimum criteria for strong password validation
const hardPasswordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+[\]{}|;:'",.<>?/\\`~]).{8,}$/gm;

// Validate complex email addresses
const complexEmailRegex = /^(?!\.)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)|[a-zA-Z0-9-]*[a-zA-Z0-9]:(?:[ -~]+|\[IPv6:[0-9a-fA-F:]+\])\])$/;

// Basic email validation regex
const baseEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Permissive email validation (risk of accepting invalid emails)
const permissiveEmailRegex = /[^\s]+@[^\s]+\.[^\s]+(\w+)*/gm;
