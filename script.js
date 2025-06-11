function saudacao() {
  const agora = new Date();
  const hora = agora.getHours();
  let mensagem = "Seja bem-vindo!";

  if (hora >= 5 && hora < 12) {
    mensagem = "Bom dia! Seja bem-vindo ao meu Portifólio!";
  } else if (hora >= 12 && hora < 18) {
    mensagem = "Boa tarde! Seja bem-vindo ao meu Portifólio!";
  } else {
    mensagem = "Boa noite! Seja bem-vindo ao meu Portifólio!";
  }

  document.getElementById("mensagem-horario").textContent = mensagem;
}

window.onload = saudacao;
