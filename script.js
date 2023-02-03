// Obtém o formulário de login
const formLogin = document.querySelector("#form-login");

formLogin.addEventListener("submit", function (event) {
  event.preventDefault();

  // Obtém os dados do formulário
  const usuario = document.querySelector("#usuario").value;
  const senha = document.querySelector("#senha").value;

  // Valida os dados do formulário
  if (usuario === "admin" && senha === "admin") {
    window.location.href = "app.html";
  } else {
    alert("Usuário ou senha inválidos");
  }
});
