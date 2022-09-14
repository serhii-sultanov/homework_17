"use strict";

const tasksForm = document.forms.tasks;
const formElements = tasksForm.elements;
const { task, submit } = formElements;
const tasksList = document.getElementById("list");
const errorMessage = document.querySelector(".error-message");
const removeButton = document.querySelector(".remove-btn");

function createNewTask() {
  const taskItem = document.createElement("li");
  taskItem.classList.add("task-item");
  taskItem.innerHTML = task.value;
  tasksList.append(taskItem);

  const removeBtn = document.createElement("button");
  removeBtn.classList.add("remove-btn");
  removeBtn.setAttribute("type", "button");
  removeBtn.innerHTML = "Delete";
  taskItem.append(removeBtn);
}

tasksForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (task.value.trim() === "") {
    task.classList.add("error-field");
    errorMessage.innerHTML = "Please, enter your task";
    return;
  }
  createNewTask();
});

tasksForm.addEventListener("submit", () => {
  task.value = "";
});

task.oninput = () => {
  const isErrorField = task.classList.contains("error-field");
  if (isErrorField) {
    task.classList.remove("error-field");
    errorMessage.innerHTML = "";
  }
};

tasksList.onclick = (event) => {
  const isRemoveButton = event.target.className === "remove-btn";
  if (isRemoveButton) {
    event.target.closest(".task-item").remove();
  }
};
