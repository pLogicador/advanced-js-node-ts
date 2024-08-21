/*  Write a function called isLandscape() that takes 2 arguments (width, height) of an image (number).
    return true if the image is in landscape mode

Explanation:

- width > height: If the width of the image is greater than its height, the image is in landscape mode. 
    The function returns true in this case. Otherwise, it returns false.
*/

function isLandscape(width, height) {
    return (width > height) ? true : false;
}

// or
function isLandscape(width, height) {
    // Check if the width is greater than the height
    return width > height;
}

// Alternatively, using a concise arrow function
const isLandscape2 = (width, height) => width > height;

// Example usage
console.log(isLandscape2(1920, 1080));   // Landscape (widescreen)
console.log(isLandscape2(1080, 1920));   // Portrait
console.log(isLandscape2(1080, 1080));   // Square (not landscape)
