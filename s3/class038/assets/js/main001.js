// Retrieve elements from the document
const paragraphsContainer = document.querySelector('.paragraphs');
const allParagraphs = paragraphsContainer.querySelectorAll('p');
const bodyStyles = getComputedStyle(document.body);
const bodyBackgroundColor = bodyStyles.backgroundColor;

// Apply styles to each paragraph
for (let paragraph of allParagraphs) {
    paragraph.style.backgroundColor = bodyBackgroundColor;
    paragraph.style.color = 'white';
}

// console.log(bodyBackgroundColor);
/* Another way with 'for...in'
for (let index in paragraphs) {
    paragraphs[index].style.backgroundColor += backgroundColorBody;
    paragraphs[index].style.color += 'white';
}
*/
