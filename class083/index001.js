// Métodos de instância e estáticos
/***
 * Neste script, exploramos a diferença entre métodos de instância e métodos estáticos em uma classe JS.
 * 
 * Métodos de Instância:
 * - São funções definidas dentro da classe e acessíveis através de instâncias criadas com 'new'.
 * - Eles podem acessar e modificar as propriedades da instância usando a palavra-chave 'this'.
 * - No exemplo, 'aumentarVolume' e 'diminuirVolume' são métodos de instância que operam sobre as propriedades
 *   específicas de uma instância de ControleRemoto, como 'vol'.
 * 
 * Métodos Estáticos:
 * - São funções definidas dentro da classe, mas não estão associadas a instâncias específicas.
 * - Eles são chamados diretamente na classe, sem a necessidade de criar instâncias usando 'new'.
 * - Não têm acesso às propriedades da instância ('this'), pois são independentes de instâncias específicas.
 * - No exemplo, 'trocaPilha' é um método estático que executa uma ação genérica, independente de instâncias,
 *   enquanto 'soma' é um método estático que simplesmente calcula a soma de dois números.
 * 
 * Exemplo de Uso:
 * - Criamos uma classe 'ControleRemoto' com métodos de instância para controlar o volume da TV.
 * - Usamos métodos de instância para aumentar ou diminuir o volume em unidades específicas.
 * - Chamamos métodos estáticos diretamente na classe para realizar ações gerais, como trocar pilhas ou realizar
 *   operações matemáticas simples.
 */
class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.vol = 0;
    }

    // Métodos de instancia
    aumentarVolume(){
        this.vol += 2;
    }

    diminuirVolume(){
        this.vol -= 2;
    }

    // Métodos estáticos
    static trocaPilha(){
        console.log('Trocando pilha...');
    }

    static soma(x, y) {
        return x + y;
    }
}

// Criando uma instância de ControleRemoto
const control1 = new ControleRemoto('LG');

// Usando métodos de instância para controlar o volume
control1.aumentarVolume();
control1.aumentarVolume();
control1.aumentarVolume();

console.log(control1);

// Chamando métodos estáticos diretamente na classe
ControleRemoto.trocaPilha();
console.log(ControleRemoto.soma(10, 5));

