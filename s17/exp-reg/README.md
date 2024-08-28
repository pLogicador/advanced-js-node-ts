# Regular Expressions in JavaScript

### Regular expressions are patterns used for matching and manipulating text strings. They are extremely useful for validation, search, replace, and parsing operations.

## Basic Syntax:

```bash
/expression/flags
```

- `expression`: The pattern that defines the regular expression.
- `flags`: Optional modifiers that change the behavior of the expression.

## Main Flags:

- `g`: Global - Finds all matching occurrences in the text.
- `i`: Insensitive - Ignores case differences (case-insensitive).
- `m`: Multiline - Allows `^` and `$` to match at the beginning and end of each line.

## Common Methods:

- `exec()`: Executes a search for a match in the input string and returns an array with the matches, including captured groups.
- `test()`: Tests the input string and returns `true` if a match is found, or `false` otherwise.
- `match()`: Returns an array of all matches found, or `null` if no matches.
- `replace()`: Replaces matches with another value.
- `search()`: Returns the index of the first match in the input string, or `-1` if no match is found.
- `split()`: Splits the input string into an array using the regular expression as a delimiter.

## Syntax:

```javascript
const regExp = /pattern/flags;
```

## Example:

- `/(maria|joão)(, today your wife)/i`:
- This pattern looks for the words "Maria" or "João" followed by the phrase ", today your wife", ignoring case differences.

</br>
</br>

# Regular Expression Methods

### JavaScript offers different methods that can be used with regular expressions for manipulating and analyzing strings. These methods can either be called directly from the regular expression object (such as `exec` and `test`) or from the string object (such as `match`, `replace`, `search`, and `split`). Below, I'll explain the differences and how each method works.

## Regular Expression Methods (RegExp)

1. `exec()`

- **Description**: Executes a search in the input string and returns an array with the matches found, including captured groups if present. If no matches are found, it returns `null`.
- **Characteristics**: Useful for more complex searches involving multiple captured groups. With the `g` (global) flag, it continues from where it left off with each call.

- Example:

```javascript
const regExp = /(João|Maria)/gi;
const result = regExp.exec(exampleText);
console.log(result); // Shows details of the match found
```

2. `test()`

- **Description**: Tests if a match is found in the string and returns true or false.
- **Characteristics**: Simpler and more efficient than exec when you only need to know if a match exists or not.
- **Example**:

```javascript
const regExp = /João/gi;
console.log(regExp.test(exampleText)); // Returns true or false
```

## String Methods (String)

1. `match()`

- **Description**: Returns an array containing all matches of the regular expression in the string. If no matches are found, it returns null.
- **Characteristics**: Used when you want all occurrences of a match.
- **Example**:

```javascript
console.log(exampleText.match(/João|Maria/gi)); // Returns array with all matches
```

2. `replace()`

- **Description**: Replaces matches of the regular expression in the string with another value. You can replace with a fixed value or a function.
- **Characteristics**: Extremely flexible, especially when using replacement functions to dynamically manipulate the text.
- **Example with fixed value**:

```javascript
console.log(exampleText.replace(/João|Maria/gi, "Felipe")); // Replaces "João" and "Maria" with "Felipe"
```

- **Example with function**:

```javascript
console.log(
  exampleText.replace(/(João|Maria)/gi, function (input) {
    return input.toUpperCase();
  })
); // Replaces "João" and "Maria" with their uppercase versions
```

3. `search()`

- **Description**: Returns the index of the first match found in the string. If no match is found, it returns -1.
- **Characteristics**: Unlike match(), it only returns the position of the first occurrence.
- **Example**:

```javascript
console.log(exampleText.search(/Maria/i)); // Returns the index of the first occurrence of "Maria"
```

4. `split()`

- **Description**: Splits the string into an array based on the regular expression as a delimiter.
- **Characteristics**: Useful for splitting strings into parts based on more complex patterns.
- **Example**:

```javascript
console.log(exampleText.split(/,\s*/)); // Splits text where there is a comma followed by space
```

</br>

# Capturing Groups

> When you use parentheses `()` in a regular expression, you create a capturing group. Capturing groups allow you to extract and manipulate specific parts of the string. In `replace()`, captured groups can be referenced using `$1`, `$2`, etc., where the number corresponds to the captured group’s order.

- **Example**:

```javascript
const regex = /(João|Maria)/gi;
const result = exampleText.replace(regex, "<b>$1</b>");
console.log(result); // Wraps João or Maria with <b> tags
```

</br>
</br>

# Quantifiers

### Quantifiers in regular expressions determine how many times an element should appear for a match to occur.

- `*` (Asterisk): Matches zero or more occurrences of the preceding element
  - Example: `a*` matches zero or more occurrences of "a".
- (Plus): Matches one or more occurrences of the preceding element.

  - Example: `a+` matches one or more occurrences of "a".

- `?` (Question Mark): Matches zero or one occurrence of the preceding element (optional).
  - Example: `a?` matches zero or one occurrence of "a".
- `{n,m}`: Defines a range for how many times the element can appear.
  - Example: `a{2,5}` matches at least 2 and at most 5 occurrences of "a".

### Regular Expressions in the Script

- `regExp1 = /Jo+ã+o/gi`: This regular expression searches for "João", allowing multiple "o" and "ã" to follow each other. The `g` flag searches for all occurrences, while the `i` flag makes the search case-insensitive.

- `regExp2 = /\.(jpg|jpeg)/gi`: This expression searches for files with `.jpg` or `.jpeg` extensions, ignoring case sensitivity and searching for all occurrences.

- `regExp3 = /\.jpe?g/gi`: Simplifies the previous expression, using `e?` to match both `.jpg` and `.jpeg` with a single expression.

- `regExp4 = /\.jpe*g/gi`: The \* allows multiple occurrences of "e", which can result in matching incorrect extensions.

- `regExp5 = /\.jpe{0,1}g/gi`: Restricts the match to 0 or 1 occurrence of "e", ensuring that only valid extensions are matched.

- `regExp6 = /\.((jp|JP)(e|E)?(g|G))/g`: This expression allows flexible matching, accepting both uppercase and lowercase variations of "jpg" or "jpeg".

</br>
</br>

# Greedy and Lazy Matching: How and Where to Use

## Regular expressions are powerful tools for text searching and manipulation, widely used in programming languages such as JavaScript, Python, and Java. Two of the main matching modes are **greedy matching** and **lazy matching**. These modes determine how the regular expression engine captures characters during a search, and choosing the correct mode is crucial for ensuring search efficiency and accuracy.

# How and Where to Use

1. Greedy Matching

- **How it works**: Greedy matching captures as many characters as possible until it finds the last allowed stopping point as defined by the regular expression.
- **Where to use**: It's generally used when you want to capture a large sequence of text containing multiple occurrences of characters or patterns. Useful, for example, when searching for blocks of code or large paragraphs of text in HTML.
- **Example use case**: Capturing entire blocks of HTML tags that contain other elements within them.
- **Advantages**:
  - Captures large blocks of text with few patterns.
- **Disadvantages**:
- Can capture more than necessary, leading to incorrect or unexpected matches. This is known as overmatching.

2. Lazy Matching

- **How it works**: Lazy matching captures as few characters as possible, stopping at the first valid match.
- **Where to use**: Ideal for more specific captures, such as when you only want to grab smaller portions of text, like the content between HTML tags or repeated patterns in a specific context. Especially useful in markup-based languages such as XML, JSON, and HTML.
- **Example use case**: Capturing the content of individual HTML tags without capturing adjacent tags.
- **Advantages**:
  - Avoids overmatching and captures only what is needed, making the pattern more precise.
- **Disadvantages**:
  - May require more matching attempts, making it slightly slower in some cases.

# Differences Between Greedy and Lazy Matching

- **Greedy Matching** tries to capture as much as possible, which can lead to capturing more than necessary. For example, in an HTML file, a greedy pattern might capture from the first `<p>` tag to the last closing `<p>` tag, including everything in between, even if you only want to capture the content of the first tag.

- **Lazy Matching**, on the other hand, tries to capture as little as possible, which is often more suitable for capturing smaller, more controlled chunks of text. In the previous example, a lazy pattern would only capture the content of each individual tag.

# Advantages and Disadvantages

## Greedy Matching

- **Advantages**:
  - Good for capturing large blocks of text in one go.
  - Reduces the number of matches made.
- **Disadvantages**:
  - Can capture more than expected, leading to incorrect matches.
  - Can cause problems in contexts where precision is important.

## Lazy Matching

- **Advantages**:
  - More precise, avoiding unnecessary captures.
  - Ideal for extracting small segments from large texts.
- **Disadvantages**:
  - May result in more matching attempts, which could decrease performance in some cases.

</br>
</br>

# Character Sets ([]) and Ranges ([min-max])

- **Character Sets**: Define a group of allowed characters. For example, [abc123] matches any of the letters `a`, `b`, `c`, or numbers `1`, `2`, `3`.
- **Negation**: Using `[^]`, you can negate the set, meaning it will match any character not present in the set. Example: `[^abc]` matches anything that is not `a`, `b`, or `c`.
- **Ranges**: Defines a range of characters. For example, `[0-9]` matches any digit from `0` to `9`. It can also be used to define letters in a range, such as `[A-Za-z]`, which matches any uppercase or lowercase letter.

## Shortcuts (Predefined Character Classes)

- `\w`: Matches any alphanumeric character and the underscore (`[A-Za-z0-9_]`).
- `\W`: Matches any character that is not alphanumeric or an underscore.
- `\d`: Matches any digit (`[0-9]`).
- `\D`: Matches any non-digit character.
- `\s`: Matches any whitespace character, such as space, tab, or newline.
- `\S`: Matches any character that is not a whitespace.

## Use of Unicode

> The Unicode range allows you to match accented characters and special symbols using their Unicode codes. For example, `\u00A0-\u00BA` matches characters from `\u00A0` to `\u00BAs`, which includes various symbols and accented letters.
