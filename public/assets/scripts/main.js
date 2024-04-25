const addButton = document.getElementById("addBtn");
const taskCont = document.getElementById("task-container");
const taskName = document.getElementById("taskName");

const fetchTasks = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => renderTask(task));
}


const renderTask = (task) => {
    const taskElement = document.createElement("div");
    taskElement.classList.add("task");
    taskElement.innerHTML = `
        <div class="checkbox-wrapper-15">
            <input class="inp-cbx" id="cbx-${task.id}" type="checkbox" style="display: none;" />
            <label class="cbx" for="cbx-${task.id}">
                <span>
                    <svg width="12px" height="9px" viewBox="0 0 12 9">
                        <polyline points="1 5 4 8 11 1"></polyline>
                    </svg>
                </span>
                <span>${task.name}</span> 
            </label>
        </div>
        <svg onClick="deletar(${task.id})" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#c11822" class="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
        </svg>`;
    taskCont.appendChild(taskElement);
}

addButton.addEventListener('click', () => {
    const task = {
        id: Date.now(),
        name: taskName.value
    };
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTask(task);
    taskName.value = "";
});



fetchTasks();


function deletar(task) {
    console.log(task);
}