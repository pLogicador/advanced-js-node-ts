import GenerateCPF from './modules/GenerateCPF';

import './assets/css/style.css';

// Função autoexecutável
(function(){
    const generate = new GenerateCPF();
    const cpfGenerated = document.querySelector('.cpf-generated');
    cpfGenerated.innerHTML = generate.generateNewCpf();
})();
