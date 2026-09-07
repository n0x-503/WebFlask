document.addEventListener('DOMContentLoaded', () => {
  // Rolagem suave para links internos (ex: botão "#sobre")
  const linksInternos = document.querySelectorAll('a[href^="#"]');

  linksInternos.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const href = link.getAttribute('href');
      const alvo = document.querySelector(href);

      if (alvo) {
        alvo.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Efeito de iluminação nos cartões ao mover o mouse (Hover Dinâmico)
  const cartoes = document.querySelectorAll('.projeto, .titulo, .detalhes-projeto, .secao-integrantes');

  cartoes.forEach(cartao => {
    cartao.addEventListener('mousemove', (e) => {
      const rect = cartao.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      cartao.style.setProperty('--mouse-x', `${x}px`);
      cartao.style.setProperty('--mouse-y', `${y}px`);
    });
  });
});