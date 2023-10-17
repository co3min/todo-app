import todos from "../Database/todos.js";
import { deleteToDo } from "./delete.js";

export function renderTodos() {
  document.getElementById("toDos").innerHTML = " <h1>My To-Dos</h1>";
  todos.forEach((todo) => {
    const todoDiv = document.createElement("div");
    todoDiv.id = todo.id;

    const todoTask = document.createElement("span");
    todoTask.textContent = todo.taskName;
    todoDiv.appendChild(todoTask);
    todoTask.classList.add("taskName");

    const todoStatus = document.createElement("span");
    todoStatus.textContent = todo.status;
    todoDiv.appendChild(todoStatus);
    todoStatus.classList.add("status");

    const totdoDeleteButton = document.createElement("button");
    totdoDeleteButton.textContent = "Delete";
    totdoDeleteButton.addEventListener("click", deleteToDo);
    totdoDeleteButton.classList.add("todoButtonDelete");
    todoDiv.appendChild(totdoDeleteButton);
    

    // const todoResp = document.createElement("span");
    // todoResp.textContent = todo.responsible;
    // todoDiv.appendChild(todoResp);

    const todoList = document.getElementById("toDos");
    todoList.appendChild(todoDiv);
  });
}
