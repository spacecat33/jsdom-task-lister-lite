document.addEventListener("DOMContentLoaded", () => {

  const createTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  const tasks = document.getElementById("tasks");

  createTaskForm.addEventListener("submit", function(event) {

    event.preventDefault();
    const list = tasks.appendChild(document.createElement('li'));
    list.innerHTML = newTaskDescription.value;
    
  });

});
