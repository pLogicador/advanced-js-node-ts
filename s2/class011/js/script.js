// alert, confirm e prompt (Navegador)
/*  No contexto do navegador, podemos usar alert, confirm e prompt para interações simples com o usuário. 
    Elas são específicas do navegador e não estão disponíveis no ambiente Node.js, que é um ambiente de execução JS no lado do servidor. 
    Essas funções são parte da API do navegador e são usadas para interações diretas com o usuário no contexto de uma página da web

    Sintaxe para colocar no objeto window:

    window.alert('Mensagem');
    window.confirm('Mensagem');
    window.prompt('Mensagem', 'Valor Padrão');



    Função          | Descrição                 |
    ----------------|---------------------------|
    window.alert()  | Exibe um alerta           |
    window.confirm()| Exibe uma confirmação     |
    window.prompt() | Exibe uma entrada de texto|
*/


alert('Bem-vindo ao meu site!');    // Exibe um alerta com a mensagem fornecida.

const confirma = confirm('Deseja continuar?');  // Exibe uma caixa de diálogo com uma mensagem e botões de confirmação (OK e Cancelar).
console.log(confirma);  

const nome = prompt('Digite seu nome:', 'Sobrenome');    // Exibe uma caixa de diálogo com uma mensagem, uma caixa de entrada de texto e botões OK/Cancelar.
console.log(nome);

/* OBS:
    Funções Síncronas:
    Algumas funções, como alert, confirm e prompt, são síncronas. Elas param a execução do código até que 
    o usuário interaja com a caixa de diálogo. Essas funções não retornam valores úteis para o código que as chamou, 
    pois seu objetivo é interagir diretamente com o usuário.

    Necessidades do Ambiente do Navegador:
    Algumas funções estão mais alinhadas com as interações visuais e de usuário no contexto de uma página da web. 
    Seu principal objetivo pode ser causar impacto visual ou coletar entrada do usuário, sem a necessidade de 
    retornar um valor específico para o código que as chamou.
*/