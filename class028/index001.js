// Objeto Date -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

// Características de uma função construtora:
// - Utiliza a palavra-chave 'new'
// - A primeira letra começa com letra maiúscula

// Primeira forma de criar uma data
const tresHorasEmMilissegundos = 60 * 60 * 3 * 1000;    // 3 horas no fuso horário de Brasília
const umDiaEmMilissegundos  = 60 * 60 * 24 * 1000;      // 24 horas em milissegundos
const dataEx1 = new Date(0 + tresHorasEmMilissegundos - umDiaEmMilissegundos);    // 01/01/1970 - Timestamp Unix ou época Unix

console.log(dataEx1.toString());

const data = new Date(); // obtém a hora atual assimm que for executado

// Segunda forma de criar uma data
// Mês é representado de 0 a 11;   sec: 0-59;   Milissegundos: 0-999
const dataEx2 = new Date(2001, 11, 9, 15, 14, 59, 999); // ano, mês, dia, hora, minuto, segundo, milissegundo


// Terceira forma de criar uma data
const dataEx3 = new Date('2002-12-09 23:30:59.1000');
//const data = new Date('2002-12-09T23:30:59.1000');

// Extraindo componentes da data
console.log('Dia' , dataEx3.getDate());
console.log('Mes' , dataEx3.getMonth() + 1);   // Mês começa do zero
console.log('Ano' , dataEx3.getFullYear());
console.log('Hora' , dataEx3.getHours());
console.log('Min' , dataEx3.getMinutes());
console.log('Sec' , dataEx3.getSeconds());
console.log('MS' , dataEx3.getMilliseconds());
console.log('Dia Seman' , dataEx3.getDay());   // 0-Domingo e 6-Sábado

// Exibindo a data completa como string
console.log(dataEx3.toString());

// Obtendo o timestamp atual em milissegundos
console.log(Date.now()); 