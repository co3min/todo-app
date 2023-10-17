import { login } from "./Login/login.js";
import { logout } from "./Login/logout.js";
import todos from "./Database/todos.js";
import { addToDo } from "./Todos/add.js";
import { renderTodos } from "./Todos/renderTodos.js";

const loginButton = document.getElementById("loginSubmit");

loginButton.addEventListener("click", login);

const isLoggedIn = localStorage.getItem("isLoggedIn");

if (isLoggedIn) {
  document.getElementById("login").setAttribute("hidden", "true");
  document.getElementById("register").setAttribute("hidden", "true");
  document.getElementById("user").removeAttribute("hidden");
  document.getElementById(
    "greetigs"
  ).textContent = `Salut ${localStorage.getItem("userName")}`;
}
const logoutBtn = document.getElementById("logout");
logoutBtn.addEventListener("click", logout);

// todos.filter((t) => t.responsible === localStorage.getItem("name"));
renderTodos();

const addTaskBtn = document.getElementById("addEditSubmit");

addTaskBtn.addEventListener("click", addToDo);
