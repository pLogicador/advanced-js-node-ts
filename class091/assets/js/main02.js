// Fetch API e Axios (JSON): Utilizadno AXIOS
/*
 * O Axios é uma biblioteca JS que facilita o envio de requisições HTTP a servidores e 
 * o manuseio das respostas. Ele fornece uma sintaxe simplificada para realizar operações comuns
 * como GET, POST, PUT, DELETE, entre outros.
 * 
 * Essa abordagem torna o código mais limpo e legível, permitindo que as requisições HTTP sejam feitas
 * de forma eficiente e sem a necessidade de lidar diretamente com a API do navegador ou com detalhes de
 * implementação de solicitações e respostas HTTP.
 */
axios('pessoas.json')
.then(response => loadsElementsOnThePage(response.data));


function loadsElementsOnThePage(json){

    const table = document.createElement('table');
    for(let p of json ){
        const tr = document.createElement('tr');

        let td1 = document.createElement('td');
        td1.innerHTML = p.nome;
        tr.appendChild(td1);

        let td2 = document.createElement('td');
        td2.innerHTML = p.idade;
        tr.appendChild(td2);

        let td3 = document.createElement('td');
        td3.innerHTML = p.salario;
        tr.appendChild(td3);

        table.appendChild(tr);
    }
    const result = document.querySelector('.result');
    result.appendChild(table);
} 