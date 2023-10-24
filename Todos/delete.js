import todos from "../Database/todos.js";
import { renderTodos } from "./renderTodos.js";

export function deleteToDo(e) {
  e.preventDefault();
  console.log("vrei sa stergi un task");
  let todosClicked = document.getElementById(e.target.parentElement.id);
  console.log(todosClicked);

  renderTodos();
}
