/* Document Object Model & Browser Object Model

The following example uses the **DOM** to dynamically create HTML elements and add them to an existing container on the page. 
The **DOM** is used to access and modify document elements, while the **BOM** handles browser-specific aspects and resources.

In the code, we create a series of HTML elements based on an array of objects. Each object specifies the tag and 
text for the HTML element. These elements are then added to a `<div>`, which is appended to a container on the page. 
The code also includes an example of accessing a **BOM** property to show the browser window width.
*/

// Array of objects defining the dynamic HTML elements
const elementDefinitions = [
    { tagName: 'p', textContent: 'text 01' },       // Paragraph
    { tagName: 'div', textContent: 'text 02' },      // Division
    { tagName: 'footer', textContent: 'text 03' },   // Footer
    { tagName: 'section', textContent: 'text 04' }   // Section
];

// Select the existing container on the page
const container = document.querySelector('.container');

// Create a new 'div' element to hold the dynamic elements
const wrapperDiv = document.createElement('div');

// Iterate over the array elementDefinitions to create and add the dynamic elements
for (let i = 0; i < elementDefinitions.length; i++) {
    const { tagName, textContent } = elementDefinitions[i];
    const element = document.createElement(tagName);  // Create the element with the specified tag
    const textNode = document.createTextNode(textContent); // Create a text node
    
    element.appendChild(textNode);  // Add the text node to the element
    wrapperDiv.appendChild(element);       // Add the element to the wrapperDiv
}

// Append the wrapperDiv with the dynamic elements to the container on the page
container.appendChild(wrapperDiv);

// Example of accessing a BOM property (Window)
console.log('Window width:', window.innerWidth);
