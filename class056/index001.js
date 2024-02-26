// Funções fábrica (factory functions)
function criaPessoa(nome, sobrenome, height, weight) {
    return {
        nome, 
        sobrenome,
        // método
        fala(asunnto){
            return `${this.nome} está falando ${asunnto}`;
        }, 

        altura: height,
        peso: weight, 
        imc(){
            const indice = this.peso / (this.altura * this.altura);
            return indice.toFixed(2);
        }

    };
}

const p1 = criaPessoa('Pedro', 'Miranda');
const p2 = criaPessoa('Maria', 'Miranda', 1.50, 70);

console.log(p1.fala('sobre JS'));
console.log(p2.fala('sobre NodeJS'));
console.log(p2.imc());