const currentDate = new Date();
const h1 = document.querySelector('.container h1');
/*
const options = {
    dateStyle: 'full',
    //timeStyle: 'short'
};
*/
h1.innerHTML = currentDate.toLocaleDateString('pt-BR', {
    dateStyle: 'full', //timeStyle: 'short'
});
