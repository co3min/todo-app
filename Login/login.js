import users from "../Database/user.js";
import todos from "../Database/todos.js";

export function login(e) {
  e.preventDefault();

  const loginEmail = document.getElementById("loginEmail");
  const loginPassword = document.getElementById("loginPassword");

  console.log(
    `Vrei sa te autentifici cu ${loginEmail.value} si ${loginPassword.value}`
  );

  const user = users.filter((user) => user.email === loginEmail.value);
  if (user[0]) {
    console.log("utilizator gasit: ", user[0]);
    if (user[0].password === loginPassword.value) {
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("userName", user[0].name);
      localStorage.setItem("userEmail", user[0].email);
      document.getElementById("login").setAttribute("hidden", "true");
      document.getElementById("register").setAttribute("hidden", "true");
      document.getElementById("user").removeAttribute("hidden");
      document.getElementById(
        "greetings"
      ).textContent = `Salut ${user[0].name}`;
    }
  } else {
    console.log("Utilizatorul nu exista");
  }
}
