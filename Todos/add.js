import todos from "../Database/todos.js";
import { renderTodos } from "./renderTodos.js";

export function addToDo(e) {
  e.preventDefault();
  console.log("vrei sa aduagi un task");
  let newId = todos[todos.length - 1].id + 1;
  let newToDo = {};
  newToDo.id = newId;
  newToDo.taskName = document.getElementById("addEditTaskName").value;
  newToDo.status = document.getElementById("addEditTaskStatus").value;
  todos.push(newToDo);

  renderTodos();
}
