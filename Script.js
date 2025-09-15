const mensagens = [
  "Você é mais forte do que imagina 🌼",
  "Nunca se esqueça: sua vida importa 💛",
  "Você não está sozinho, estamos juntos 💝",
  "Acredite: dias melhores virão 🌹",
  "Sempre existe esperança 🍀",
  "Não desista 🌷",
  "Você é luz 🌟",
  "Não sofra em silêncio. Falar faz bem e pode aliviar o peso 🌸",
  "Estamos aqui para te ouvir e te apoiar 💐",
  "Enquanto houver vida, há esperança ⭐"
];

document.getElementById("btnMensagem").addEventListener("click", () => {
  const aleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
  document.getElementById("mensagem").innerText = aleatoria;
});
