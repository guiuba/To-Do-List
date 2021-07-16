let taskList = document.getElementById("task-list");
let newTask = document.getElementById("input-task");
let todos = [];
document.querySelector(".add-task-button")
    .addEventListener("click", function () {
        addTask(newTask);
    });

function addTask(newTask) {
    if (newTask.value !== "") {
        let newLi = document.createElement("li");
        newLi.innerHTML = '<input type="checkbox">'
            +'<span class="task">' + newTask.value + '</span>'
           +'<button class="delete-btn" onclick="this.parentNode.remove()" >+</button>';

        taskList.appendChild(newLi);
        todos.push(newLi.innerHTML);

        localStorage.setItem('tasks', JSON.stringify(todos));
        newTask.value = "";
    }
}

function getFromLocalStorage() {
    todos = JSON.parse(localStorage.getItem('tasks')) || [];
    for (let x in todos) {
        let newLi = document.createElement("li");
        newLi.innerHTML = todos[x];
        taskList.appendChild(newLi);
    }
}

getFromLocalStorage();
