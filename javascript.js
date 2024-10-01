  // Código de animação de texto dinâmico
  const words = ["Seiri", "Seiton", "Seiso", "Seiketsu", "Shitsuke"];
  let wordIndex = 0;
  let charIndex = 0;
  const typingDelay = 200;
  const erasingDelay = 100;
  const newWordDelay = 500; // Delay between words
  const textElement = document.getElementById("dynamic-text");

  function type() {
      if (charIndex < words[wordIndex].length) {
          textElement.textContent += words[wordIndex].charAt(charIndex);
          charIndex++;
          setTimeout(type, typingDelay);
      } else {
          setTimeout(erase, newWordDelay);
      }
  }

  function erase() {
      if (charIndex > 0) {
          textElement.textContent = words[wordIndex].substring(0, charIndex - 1);
          charIndex--;
          setTimeout(erase, erasingDelay);
      } else {
          wordIndex++;
          if (wordIndex >= words.length) wordIndex = 0;
          setTimeout(type, typingDelay);
      }
  }

  document.addEventListener("DOMContentLoaded", function() { 
      setTimeout(type, newWordDelay);
  });

  // Função que monitora o scroll para exibir o botão
  window.onscroll = function() { mostrarBotao() };

  function mostrarBotao() {
      // Verifica se o usuário chegou perto do final da página (ajustado para -300)
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 300) {
          document.getElementById("meuBotao").style.display = "block";
      } else {
          document.getElementById("meuBotao").style.display = "none";
      }
  }

  // Função para redirecionar o usuário ao clicar no botão
  document.getElementById("meuBotao").onclick = function() {
      window.location.href = "o que é.html"; // Substitua com o URL desejado
  }
