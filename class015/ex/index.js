const inputNumber = Number(prompt('Insira um número abaixo'));
const numberTitle = document.getElementById('number-title');
const divText = document.getElementById('text');


numberTitle.innerHTML = inputNumber;

divText.innerHTML = ' ';
divText.innerHTML += `<p>Raiz quadrada é ${inputNumber ** 0.5}</p>`;
divText.innerHTML += `<p>${inputNumber} é inteiro? ${Number.isInteger(inputNumber)}</p>`;
divText.innerHTML += `<p>É NaN ${Number.isNaN(inputNumber)}</p>`;
divText.innerHTML += `<p>Arredondando para baixo: ${Math.floor(inputNumber)}</p>`;
divText.innerHTML += `<p>Arredondando para cima: ${Math.ceil(inputNumber)}</p>`;
divText.innerHTML += `<p>Com duas cadas decimais ${inputNumber.toFixed(2)}</p>`;