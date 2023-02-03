const submitBtn = document.getElementById("submit");
    // Obtém o formulário de login
    const formLogin = document.querySelector("#form-login");

    // Adiciona um evento de submit ao formulário de login
    formLogin.addEventListener("submit", function(event) {
      event.preventDefault();

      // Obtém os dados do formulário
      const usuario = document.querySelector("#usuario").value;
      const senha = document.querySelector("#senha").value;

      // Valida os dados do formulário
      if (usuario === "admin" && senha === "admin") {
        // Redireciona para a página de agendamento
        window.location.href = "app.html";
      } else {
        alert("Usuário ou senha inválidos");
      }
    });