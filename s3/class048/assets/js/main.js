const inputTask = document.querySelector('.input-task');
const btnAdd = document.querySelector('.btn-add');
const tasks = document.querySelector('.tasks');

function createLi(){
    const li = document.createElement('li');
    return li;
}

function cleanInput(){
    inputTask.value = '';
    inputTask.focus();
}

function createBtnClean(li) {
    li.innerText += ' ';
    const btnClean = document.createElement('button');
    btnClean.innerText = 'Apagar';
    //btnClean.classList.add('clear');
    btnClean.setAttribute('class', 'clear'); // (atributo, valor)
    li.appendChild(btnClean);
}

function saveTasks(){
    const liTasks = tasks.querySelectorAll('li');
    const toDoList = [];
    
    for (let t of liTasks){
        let taskText = t.innerText;
        taskText = taskText.replace('Apagar', '').trim();
        toDoList.push(taskText);
    }

    const tasksJSON = JSON.stringify(toDoList); // 'stringify' converte para string no formato JSON
    localStorage.setItem('tarefas', tasksJSON);
}

function createTask(inputText){
    const li = createLi();

    li.innerText = inputText;
    tasks.appendChild(li);
    createBtnClean(li);
    saveTasks();
}

btnAdd.addEventListener('click', function(){
    if (!inputTask.value) return;
    
    createTask(inputTask.value);
    cleanInput();
});

inputTask.addEventListener('keypress', function(event){
    if (event.keyCode === 13) {
        if (!inputTask.value) return;
    
        createTask(inputTask.value);
    }
});

document.addEventListener('click', function(event){
    const element = event.target;

    if (element.classList.contains('clear')) {
        element.parentElement.remove();
        saveTasks();
    }
});

function addSavedTasks(){
    const tasks = localStorage.getItem('tarefas');
    const toDoList = JSON.parse(tasks); // 'parse' converte de volta para um objeto array do js
    console.log(tasks);

    for (let t of toDoList) {
        createTask(t);
    }
}

addSavedTasks();