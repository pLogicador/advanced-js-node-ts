// for in (estrutura de repetição)
// for in -> lê os indices ou chaves do objeto

fruits = ['maçã','pera','goiaba'];

person = {
    nome: 'Pedro',
    sobrenome: 'Miranda',
    idade: 25
};

//--------------------------------------------------------- 
console.log(person.nome);

const keyName = 'nome';
console.log(person[keyName]);

//---------------------------------------------------------
for (let key in person) {
    console.log(key, person[key]);
}

//---------------------------------------------------------
for (let index in fruits) {
    console.log(fruits[index]);
}


/*
for (let i=0; i<fruits.length; i++) {
    console.log(fruits[i]);
}
*/