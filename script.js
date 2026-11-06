// Select the HTML elements that JavaScript needs to work with.
const todoForm = document.getElementById("todo-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const emptyState = document.getElementById("empty-state");
const taskCount = document.getElementById("task-count");
const progressText = document.getElementById("progress-text");
const message = document.getElementById("message");
const clearCompletedButton = document.getElementById("clear-completed");

// Load saved tasks from localStorage, or start with an empty array.
let tasks = [];

try {
  tasks = JSON.parse(localStorage.getItem("my-todo-tasks")) || [];
} catch (error) {
  tasks = [];
}

// Save the current task array in this browser.
function saveTasks() {
  localStorage.setItem("my-todo-tasks", JSON.stringify(tasks));
}

// Draw the task array on the page.
function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    const listItem = document.createElement("li");
    listItem.className = "task-item";
    listItem.dataset.id = task.id;

    if (task.completed) {
      listItem.classList.add("completed");
    }

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task-checkbox";
    checkbox.checked = task.completed;
    checkbox.setAttribute("aria-label", `Mark ${task.text} as completed`);

    const taskText = document.createElement("span");
    taskText.className = "task-text";
    // textContent safely displays user input as text.
    taskText.textContent = task.text;

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "delete-button";
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("aria-label", `Delete ${task.text}`);

    listItem.append(checkbox, taskText, deleteButton);
    taskList.appendChild(listItem);
  });

  const completedTasks = tasks.filter((task) => task.completed).length;
  const remainingTasks = tasks.length - completedTasks;

  taskCount.textContent = `${tasks.length} ${tasks.length === 1 ? "task" : "tasks"}`;
  progressText.textContent = `${completedTasks} completed · ${remainingTasks} remaining`;
  emptyState.hidden = tasks.length !== 0;
  clearCompletedButton.disabled = completedTasks === 0;
  clearCompletedButton.style.opacity = completedTasks === 0 ? "0.45" : "1";
}

// Add a new task when the form is submitted.
todoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const taskText = taskInput.value.trim();

  if (taskText === "") {
    message.textContent = "Please enter a task before adding.";
    taskInput.focus();
    return;
  }

  const newTask = {
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    text: taskText,
    completed: false
  };

  tasks.push(newTask);
  saveTasks();
  renderTasks();

  taskInput.value = "";
  message.textContent = "";
  taskInput.focus();
});

// Event delegation: handle checkbox and delete clicks from the task list.
taskList.addEventListener("click", (event) => {
  const listItem = event.target.closest(".task-item");

  if (!listItem) return;

  const taskId = listItem.dataset.id;

  if (event.target.classList.contains("delete-button")) {
    tasks = tasks.filter((task) => task.id !== taskId);
    saveTasks();
    renderTasks();
  }
});

// Handle completion changes using the same task-list parent.
taskList.addEventListener("change", (event) => {
  if (!event.target.classList.contains("task-checkbox")) return;

  const listItem = event.target.closest(".task-item");
  const task = tasks.find((item) => item.id === listItem.dataset.id);

  if (task) {
    task.completed = event.target.checked;
    saveTasks();
    renderTasks();
  }
});

// Remove all completed tasks.
clearCompletedButton.addEventListener("click", () => {
  tasks = tasks.filter((task) => !task.completed);
  saveTasks();
  renderTasks();
});

// Show saved tasks when the page first opens.
renderTasks();
