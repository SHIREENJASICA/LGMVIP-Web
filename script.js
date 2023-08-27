document.addEventListener("DOMContentLoaded", function() {
    const addTaskButton = document.getElementById("addTask");
    const taskInput = document.getElementById("task");
    const taskList = document.getElementById("taskList");
  
    function createTaskElement(taskText) {
      const li = document.createElement("li");
      li.innerHTML = `
        <span>${taskText}</span>
        <button class="removeTask">Remove</button>
      `;
      return li;
    }
  
    function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        const taskElement = createTaskElement(taskText);
        taskList.appendChild(taskElement);
        taskInput.value = "";
      }
    }
  
    function removeTask(event) {
      event.target.parentNode.remove();
    }
  
    addTaskButton.addEventListener("click", addTask);
  
    taskInput.addEventListener("keyup", function(event) {
      if (event.key === "Enter") {
        addTask();
      }
    });
  
    taskList.addEventListener("click", function(event) {
      if (event.target.classList.contains("removeTask")) {
        removeTask(event);
      }
    });
  });
        

    
