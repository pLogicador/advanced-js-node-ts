
const div = document.querySelector('.paragraphs');
const paragraphs = div.querySelectorAll('p');
const bodyStyles = getComputedStyle(document.body);
const backgroundColorBody = bodyStyles.backgroundColor; 

//console.log(backgroundColorBody);
/*
for (let index in paragraphs) {
    paragraphs[index].style.backgroundColor += backgroundColorBody;
    paragraphs[index].style.color += 'white';
}
*/

for (let i of paragraphs) {
    i.style.backgroundColor += backgroundColorBody;
    i.style.color += 'white';
}