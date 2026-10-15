const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

let totalTasks = 0;

function updateCount() {
    taskCount.textContent = totalTasks;
}

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    const task = document.createElement("li");
    task.textContent = taskText;

    task.addEventListener("click", function () {
        task.classList.toggle("completed");
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function () {
        task.remove();
        totalTasks--;
        updateCount();
    });

    task.appendChild(deleteButton);
    taskList.appendChild(task);

    totalTasks++;
    updateCount();

    taskInput.value = "";
}

addButton.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
