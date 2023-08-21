const tasks = [];

const taskTitleInput = document.getElementById('taskTitle');
const taskDeadlineInput = document.getElementById('taskDeadline');
const taskPriorityInput = document.getElementById('taskPriority');
const addTaskButton = document.getElementById('addTaskButton');
const tasksContainer = document.getElementById('tasks');

addTaskButton.addEventListener('click', () => {
    const task = {
        title: taskTitleInput.value,
        deadline: taskDeadlineInput.value,
        priority: taskPriorityInput.value,
    };
    tasks.push(task);
    renderTasks();
    clearInputs();
});

function renderTasks() {
    tasksContainer.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskElement = document.createElement('li');
        taskElement.className = 'task';
        taskElement.innerHTML = `
            <h3>${task.title}</h3>
            <p>Deadline: ${task.deadline} | Priority: ${task.priority}</p>
        `;
        tasksContainer.appendChild(taskElement);
    });
}

function clearInputs() {
    taskTitleInput.value = '';
    taskDeadlineInput.value = '';
    taskPriorityInput.value = 'High';
}

// Initialize tasks
renderTasks();


