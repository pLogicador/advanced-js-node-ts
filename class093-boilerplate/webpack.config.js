/*** 
 * Este arquivo webpack.config.js deve ficar na pasta raíz. O '.' se refere à pasta atual,
 * enquanto o '/' se refere ao separador de diretórios em caminhos de arquivos.
 * O 'resolve' é um método que resolve caminhos de pastas de uma forma mais conveniente.
 * 
 * Vamos utilizar o ECMAScript 6 (ES6), mas o CommonJS é o padrão do Node.js.
 * Em Node.js, todo arquivo JS é um módulo específico, possuindo seu próprio namespace.
 * 
    - module.exports = {};: Exporta as configurações do Webpack.
    - entry: Ponto de entrada da aplicação.
    - output: Local e nome do arquivo de saída após a compilação.
    - path.resolve e __dirname: Resolvem caminhos absolutos.
    - module: Define como os arquivos devem ser tratados.
    - devtool: Especifica o tipo de source map a ser gerado.

    OBS: O comando 'generates' definido dentro do arquivo 'package.json' executa o webpack em modo de observação, 
        recarregando automaticamente quando os arquivos são modificados. Isso aumenta a produtividade ao desenvolver, 
        pois evita a necessidade de executar manualmente o comando a cada modificação.",
*/

const path = require('path');   // CommonJS: require é uma forma de importar módulos no Node.js

module.exports = {
    mode: 'production',         // Define o modo de compilação como produção
    entry: './src/index.js',    // Define o arquivo de entrada para a estrutura do webpack
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),    // Define o diretório de saída para os arquivos compilados
        filename: 'bundle.js'                                       // Define o nome do arquivo de saída
    },
    module: {
        rules:[{    // Define as regras para o módulo
            exclude: /node_modules/,    // Exclui a pasta 'node_modules' da aplicação
            test: /\.js$/,              // Define o tipo de arquivo a ser tratado (neste caso, arquivos JavaScript)
            use: {  // Define o uso de um loader para transformar o código JavaScript
                loader: 'babel-loader',     // Utiliza o babel-loader para transpilar o código
                options: {
                    presets: ['@babel/env'] // Define os presets do Babel a serem utilizados para transpilação
                }
            }
        }]
    },
    devtool: 'source-map'   // Define a criação de sourcemaps para mapeamento do código fonte original
};