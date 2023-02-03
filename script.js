const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const users = [
    {
      username: "admin",
      password: "admin",
    },
  ];
  const user = users.find((user) => user.username === username);
  if (!user) {
    alert("Usuário inválido");
  } else if (user.password !== password) {
    alert("Senha inválida");
  } else {
    alert("Loginrealizado com sucesso");
}
});