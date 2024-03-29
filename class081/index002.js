// Getters e Setters
/**
 * Criando uma propriedade privada utilizando o tipo Symbol
 * Criando getter e setter para class
 */
const _velocidade = Symbol('velocidade');   // A velocidade está protegida de modificações 
class Carro{
    constructor(nome){
        this.nome = nome;
        this[_velocidade] = 0;
    }

    get velocidade(){
        console.log('Acessando...');
        return this[_velocidade];
    }

    set velocidade(valor){
        console.log('Atribuindo...');
        if(typeof valor != 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    acelerar(){
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar(){
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Gol');
/*
for (let i=0; i<=200; i++){
    c1.acelerar();
}
*/

c1.velocidade = 99;
console.log(c1.velocidade); // chama o getter