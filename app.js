// Obtém o formulário de agendamento
const formAgendamento = document.querySelector("#form-agendamento");

formAgendamento.addEventListener("submit", function(event) {
  event.preventDefault();

  // Obtém os dados do formulário
  const nomeLaboratorio = document.querySelector("#nome-laboratorio").value;
  const data = document.querySelector("#data").value;
  const horario = document.querySelector("#horario").value;

  // Valida os dados do formulário
  if (nomeLaboratorio && data && horario) {
    alert(`Laboratório "${nomeLaboratorio}" agendado para ${data} às ${horario}`);
  } else {
    alert("Por favor, preencha todos os campos");
  }
});