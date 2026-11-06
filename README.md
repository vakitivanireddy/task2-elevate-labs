# My To-Do List Web App

A responsive, front-end To-Do List built with **HTML, CSS, and Vanilla JavaScript**.

## Features

- Add a task.
- Mark a task as completed or active.
- Delete an individual task.
- Clear all completed tasks.
- Display total, completed, and remaining task counts.
- Save tasks in the browser with `localStorage`.
- Update the page instantly without reloading.
- Responsive layout for mobile and desktop.

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript (ES6)
- DOM manipulation and event listeners
- Browser `localStorage`

## Project files

```text
todo-list-web-app/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Run locally

1. Download or clone this repository.
2. Open the project folder in VS Code.
3. Open `index.html` in Chrome, or use the **Live Server** extension in VS Code.
4. If using Live Server, right-click `index.html` and choose **Open with Live Server**.

No npm installation or backend server is required.

## How it works

1. The HTML file provides the input, form, task list, and buttons.
2. CSS styles the app and makes it responsive.
3. JavaScript listens for form submission to add tasks.
4. Each task is stored as an object in a JavaScript array.
5. The `renderTasks()` function creates and displays task elements.
6. Event delegation on the task list handles delete and completion actions.
7. `localStorage` keeps tasks available after refreshing the browser.

## Testing checklist

- [ ] Add a task with text.
- [ ] Try submitting an empty task.
- [ ] Mark a task as completed.
- [ ] Mark a completed task as active again.
- [ ] Delete one task.
- [ ] Clear completed tasks.
- [ ] Refresh the page and check that remaining tasks are saved.
- [ ] Check the layout on a mobile-sized browser window.

## Internship task

**Task 2: Build a To-Do List Web App (Front-end only, using Vanilla JavaScript).**

This project implements the requested add, complete, and delete functionality and updates the UI without a page reload.
