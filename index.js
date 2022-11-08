const taskInput = document.querySelector(".
");
// TODO: select the input with class task-input
const addTaskBtn = document.querySelector(".task-add-btn");
// TODO: select the button with class task-add-btn
const taskElements = document.querySelector(".task-elements");
// TODO: select the div with class task-elements

let taskCount = 1;

function addTask() {
  taskId = `task-${++taskCount}`;
  taskIdDiv = `task-${taskId}-div`;

  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task-element");
  // TODO: create <div class="task-element"></div>

  const taskColl = document.createElement("div");
  taskColl.id = taskIdDiv;

  const taskCheckbox = document.createElement("input");
  taskCheckbox.type = "checkbox";
  taskCheckbox.id = taskId;
  taskCheckbox.classList.add("task-checkbox");
  taskCheckbox.addEventListener('click', setTaskComplete());
  // TODO: create <input class="task-checkbox" type="checkbox" id=taskId />

  const taskLabel = document.createElement("label");
  taskLabel.setAttribute("for", taskId);
  taskLabel.innerHTML = taskInput.value;
  // TODO: create <label for=taskId>task</label>

  const taskElement = document.querySelector(".task-element");
  taskColl.appendChild(taskCheckbox);
  taskColl.appendChild(taskLabel);
  taskElement.appendChild(taskColl);
  // TODO: add taskCheckbox & taskLabel to <div class="task-element"></div>

  taskElements.appendChild(taskElement);

  taskInput.value = "";
  // TODO add <div class="task-element">...</div> to <div class="task-elements">...</div>
}

// TODO: set a task as complete by crossing out the label by including task-done class
function setTaskComplete() {
  console.log("YEA BUDDY!");
}

addTaskBtn.addEventListener("click", (event) => {
  addTask();
});


// TODO: add event listener to task-add-btn

// TODO: add event listener to task-checkboxes
function addListenerToCheckboxes() {}
