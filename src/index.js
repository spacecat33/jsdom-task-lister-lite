document.addEventListener("DOMContentLoaded", () => {

  const createTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  const tasks = document.getElementById("tasks");
  const priority = document.getElementById("priority")

  createTaskForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const list = tasks.appendChild(document.createElement('li'));
    // list.innerHTML = newTaskDescription.value;
    // if priority.value != 0,
    // list.style.color = 'red', 
    // else 'blue';

    const createButtonElement = document.createElement('button');
    createButtonElement.innerHTML = 'x';
    list.append(createButtonElement);  
    createButtonElement.addEventListener('click', function(event) {
        event.target.parentElement.remove()
      }) 

  });

});
