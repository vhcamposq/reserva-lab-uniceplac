
          // Verifica se o usuário está logado
      let usuarioLogado = false;

// Obtém o botão de agendamento
const btnAgendar = document.querySelector("#agendar");

// Adiciona um evento de clique ao botão de agendamento
btnAgendar.addEventListener("click", function(event) {
  event.preventDefault();

  // Verifica se o usuário está logado
  if (!usuarioLogado) {
    alert("Você precisa estar logado para agendar um laboratório");
    return;
  }

  // Obtém os dados do formulário
  const nomeLaboratorio = document.querySelector("#nome-laboratorio").value;
  const data = document.querySelector("#data").value;
  const horario = document.querySelector("#horario").value;

  // Verifica se todos os campos foram preenchidos
  if (!nomeLaboratorio || !data || !horario) {
    alert("Por favor, preencha todos os campos");
    return;
  }

  // Envia os dados para o servidor
  // ...

  // Exibe uma mensagem de sucesso
  alert("Laboratório agendado com sucesso!");
});
