// Funções geradoras

// Exemplo 3: exemplo simples
function* geradora1() {
    // Código qualquer...
    yield 'Valor 1';
    // Código qualquer...
    yield 'Valor 2';
    // Código qualquer...
    yield 'Valor 3';
}

const g1 = geradora1();
/*
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next());
*/

// Exemplo 2: podemos iterar também
for (let value of g1) { // o for sabe quando acaba
    console.log(value);
}

// Gerador infinito
function* geradora2() {
    let i = 0;

    while(true) {
        yield i;
        i++;
    }
}

/*
const g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
*/

// Exemplo 3: Gerador que delega para outro gerador
function* geradora3(){
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4(){
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();
for(let valor of g4) {
    console.log(valor);
}

function* geradora5(){
    yield function(){
        console.log('vim de y1');
    };

    // ...
    /* // isso faz parar e não prossegir para a próxima execução
    return function(){
        console.log('vim do return');
    }
    
    */

    yield function(){
        console.log('vim de y2');
    };
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();