document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
  
    function toggleMenu() {
      // Só ativa para telas até 768px
      if (window.innerWidth <= 768) {
        navLinks.classList.toggle('active');
  
        // Acessibilidade: aria-expanded
        const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !expanded);
      }
    }
  
    menuToggle.addEventListener('click', toggleMenu);
  
    // Fechar menu automaticamente se mudar o tamanho da tela para >768 e o menu estiver aberto
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', false);
      }
    });
  });
  