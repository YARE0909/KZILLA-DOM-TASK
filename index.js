const taskInput = document.querySelector(".task-input");

const addTaskBtn = document.querySelector(".task-add-btn");

const taskElements = document.querySelector(".task-elements");

let taskCount = 0;

function addTask() {
  if (taskInput.value !== "") {
    taskId = `task-${++taskCount}`;
    taskIdDiv = `task-${taskId}-div`;

    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task-element");
    // TODO: create <div class="task-element"></div>

    const taskColl = document.createElement("div");
    taskColl.id = taskIdDiv;
    taskColl.classList.add("task-coll");

    const checkBoxDiv = document.createElement("div");

    const taskCheckbox = document.createElement("input");
    const taskLabel = document.createElement("label");
    const deleteBtn = document.createElement("button");

    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", (event) => {
      taskColl.remove();
      console.log("DELETE!");
    });

    taskCheckbox.type = "checkbox";
    taskCheckbox.id = taskId;
    taskCheckbox.classList.add("task-checkbox");
    taskCheckbox.addEventListener("click", (event) => {
      if (taskCheckbox.checked) {
        taskLabel.classList.add("task-done");
      } else {
        taskLabel.classList.remove("task-done");
      }
      setTaskComplete();
    });

    taskLabel.setAttribute("for", taskId);
    taskLabel.innerHTML = taskInput.value;

    const taskElement = document.querySelector(".task-element");
    checkBoxDiv.appendChild(taskCheckbox);
    checkBoxDiv.appendChild(taskLabel);
    taskColl.appendChild(checkBoxDiv);
    taskColl.appendChild(deleteBtn);
    taskElement.appendChild(taskColl);

    taskElements.appendChild(taskElement);

    taskInput.value = "";
  }
}

addTaskBtn.addEventListener("click", (event) => {
  addTask();
});
