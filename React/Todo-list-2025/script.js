const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    const task = inputBox.value.trim();
    if (!task) {
        alert("Please write down a task");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
      <label>
        <input type="checkbox">
        <span>${task}</span>
      </label>
      <span class="edit-btn">Edit</span>
      <span class="delete-btn">Delete</span>
    `;

    // Append the task to the list
    listContainer.appendChild(li);

    // Clear the input box after adding the task
    inputBox.value = "";

    // Select elements inside the li
    const checkbox = li.querySelector("input[type='checkbox']");
    const editBtn = li.querySelector(".edit-btn");
    const taskSpan = li.querySelector("label span");
    const deleteBtn = li.querySelector(".delete-btn");

    // Handle checkbox toggle
    checkbox.addEventListener("click", function () {
        li.classList.toggle("completed", checkbox.checked);
        updateCounters();
    });

    // Handle edit button
    editBtn.addEventListener("click", function () {
        const update = prompt("Edit task:", taskSpan.textContent);
        if (update !== null) {
            taskSpan.textContent = update;
            li.classList.remove("completed");
            checkbox.checked = false;
            updateCounters();
        }
    });

    // Handle delete button
    deleteBtn.addEventListener("click", function () {
        if (confirm("Are you sure you want to delete this task?")) {
          li.remove();
          updateCounters();
        }
      });

    // Update counters after adding a task
    updateCounters();
}

function updateCounters() {
    const completedTasks = document.querySelectorAll(".completed").length;
    const uncompletedTasks = document.querySelectorAll("li:not(.completed)").length;

    document.getElementById("completed-counter").textContent = completedTasks;
    document.getElementById("uncompleted-counter").textContent = uncompletedTasks;
}

// Add an event listener to the button
document.getElementById("input--button").addEventListener("click", addTask);
