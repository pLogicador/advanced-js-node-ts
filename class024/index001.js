// if else (1)
/*
Entre 0 - 11 bom dia
Entre 12 - 17 boa tarde
Entre 18 - 23 boa noite
*/

const hora = 0;

if (hora <= 11) {
    console.log('Bom Dia!')
} else if (hora >= 12 && hora <= 17 ) {
    console.log('Boa Tarde!')
} else /*(hora > 17 && hora <= 23)*/ {
    console.log('Boa Noite!');
}
