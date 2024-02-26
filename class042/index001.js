/*  Escreva uma função chamada ePaisagem() que recebe 2 argumentos (largura, altura) de uma imagem (number).
    retorne true se a imagem estiver no modo paisagem
*/

function isLandscape1(width, height) {
    return (width > height) ? true : false; 
}

// ou 
function isLandscape2(width, height) {
    return width >= height; 
}

const isLandscape3 = (width, height) => width >= height;

console.log(isLandscape3(1920, 1080));   // widscreen
console.log(isLandscape3(1080, 1920));   // portrate
