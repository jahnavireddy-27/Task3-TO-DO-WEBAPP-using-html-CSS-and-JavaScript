const inputbox = document.getElementById("inputtext");
const listcontainer = document.getElementById("task-list");
const checkedTasks=new Set();


function addTask() {
  if (inputbox.value === '') {
    alert("Write something!");
  } else {
    var li = document.createElement("li");
    li.innerHTML = inputbox.value;
    li.id="uncompleted";

    var editButton = document.createElement("button");
    editButton.innerHTML = 'Edit';
    editButton.classList.add('button', 'edit');

    var deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.classList.add('button', 'delete');

    li.appendChild(editButton);
    li.appendChild(deleteButton);



    listcontainer.appendChild(li);
    inputbox.value = '';
  }
}


listcontainer.addEventListener('click', function(event) {
    const target = event.target;
  
    if (target.tagName === 'BUTTON' && target.classList.contains('edit')) {
      const li = target.parentNode;
      editTask(li);
    }
  
    if (target.tagName === 'BUTTON' && target.classList.contains('delete')) {
      const li = target.parentNode;
      deleteTask(li);
    }
  
  });
  
  

function editTask(li) {
  var newTask = prompt('Enter the new task:');
  if (newTask !== null) {
    li.firstChild.textContent = newTask;
  }
}

function deleteTask(li) {
  li.remove();
}

listcontainer.addEventListener("click", function(e) {
  if (e.target.tagName === 'LI') {
    var liElement = e.target;
    liElement.classList.toggle("checked");
    var taskValue = liElement.firstChild.nodeValue.trim();

    if (liElement.classList.contains("checked")) {
      if (liElement.id === 'uncompleted') {
        checkedTasks.add(taskValue);
      }
    } else {
       checkedTasks.delete(taskValue);
    }
  }
}, false);




const showCheckedButton = document.getElementById("completedtasksbtn");
showCheckedButton.addEventListener("click", displayCheckedTasks);

function displayCheckedTasks() {
  const checkedTasksArray = Array.from(checkedTasks);
  const checkedTasksContainer = document.getElementById("completedtaskscontainer");
  
  checkedTasksContainer.innerHTML = "";
  const ul = document.createElement("ul");
  ul.id='list';
  checkedTasksArray.forEach(taskId => {
    const li = document.createElement("li");
    li.textContent = taskId;
    ul.appendChild(li);
  });

  checkedTasksContainer.appendChild(ul);
}



