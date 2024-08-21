const inputTask = document.querySelector('.input-task');
const btnAdd = document.querySelector('.btn-add');
const tasks = document.querySelector('.tasks');

// Create a list item (li) element
function createLi(){
    return document.createElement('li');
}

// Clear input field and refocus
function cleanInput(){
    inputTask.value = '';
    inputTask.focus();
}

// Create and append the delete button to the task list item
function createBtnClean(li) {
    li.innerText += ' ';    // spacing between text and button within `li`
    const btnClean = document.createElement('button');
    btnClean.innerText = 'Remove';
    btnClean.classList.add('clear'); //or btnClean.setAttribute('class', 'clear'); // (attribute, value) 
    li.appendChild(btnClean);
}

// Save tasks to local storage
function saveTasks(){
    const taskItems = tasks.querySelectorAll('li');
    const toDoList = [];
    
    for (let t of taskItems){
        let taskText = t.innerText;
        taskText = taskText.replace('Remove', '').trim();
        toDoList.push(taskText);
    }

    const tasksJSON = JSON.stringify(toDoList);
    localStorage.setItem('My tasks', tasksJSON);
}

// Create a new task item and append it to the list
function createTask(taskText){
    const li = createLi();
    li.innerText = taskText;
    createBtnClean(li);
    tasks.appendChild(li);
    saveTasks();
}

// Event listener for adding tasks via button click
btnAdd.addEventListener('click', () => {
    if (!inputTask.value) return;
    createTask(inputTask.value);
    cleanInput();
});

// Event listener for adding tasks via pressing Enter key
inputTask.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' && inputTask.value) {
        createTask(inputTask.value);
        cleanInput();
    }
});

// Handle task deletion when clicking the delete button
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('clear')) {
        event.target.parentElement.remove();
        saveTasks();
    }
});

// Add tasks saved in local storage back to the list
function addSavedTasks(){
    const savedTasks = localStorage.getItem('My tasks');
    if (!savedTasks) return;
    //console.log(savedTasks);
    const toDoList = JSON.parse(savedTasks);
    toDoList.forEach(task => createTask(task));
}

addSavedTasks();
