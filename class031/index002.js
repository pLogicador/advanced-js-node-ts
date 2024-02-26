// Explicando porque 'var' possui escopo de função
/*
O escopo da função é especial; no caso de uma declaração 'var' dentro dela, a variável não pode ser acessada
por seus vizinhos fora da função. Ou seja, o escopo global não pode acessá-la diretamente.
*/
const verdadeiro = true;
var subname = 'Miranda';

function talkHello(){ // Dentro da função, ela age como um micro escopo global para 'var'
    var name01 = 'Pedro';

    console.log(name01, subname);

    if (verdadeiro) {
        let name02 = 'Emanuel';
        var subname = 'Silva'; // Cuidado: redefinindo a variável 'subname' dentro do bloco if
        console.log(name01, subname);
    }

    //console.log(name02); // Não podemos acessar 'let' aqui, pois ela foi declarada em um escopo diferente
}

//console.log(name01); // Não podemos acessar a declaração 'var' fora do escopo da função onde ela foi declarada
talkHello();

console.log('Fora da função:', subname); // Cuidado: 'subname' foi redefinido dentro do bloco if