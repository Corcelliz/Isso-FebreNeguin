let lastScrollTop = 0;
const nav = document.querySelector("nav");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-ul");

// Remove a classe 'nav-hidden' quando a página carrega
document.addEventListener("DOMContentLoaded", function () {
  nav.classList.remove("nav-hidden");
});

// Esconde/Mostra o nav ao rolar a página
window.addEventListener("scroll", function () {
  if (this.window.innerWidth > 480) {
    let scrollTop = document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      nav.classList.add("nav-hidden");
    } else {
      nav.classList.remove("nav-hidden");
    }

    lastScrollTop = scrollTop;
  }
});

// Exibe/Esconde o menu ao clicar no botão hambúrguer
hamburger.addEventListener("click", () => {
  const isOpen = navMenu.classList.contains("open");

  if (isOpen) {
    navMenu.style.maxHeight = 0; // Fecha o menu
    navMenu.style.opacity = 0;
  } else {
    navMenu.style.maxHeight = `${navMenu.scrollHeight}px`; // Abre o menu com altura dinâmica
    navMenu.style.opacity = 1;
  }

  navMenu.classList.toggle("open"); // Alterna a classe
});

// Exibir a seta quando o usuário rolar para baixo
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    const backToTop = document.getElementById("backToTop");
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    if (scrollPosition > 100) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });

  // Rolar para o topo ao clicar na seta
  document.getElementById("backToTop").addEventListener("click", function () {
    // Verifica se o navegador suporta o scroll suave
    if ("scrollBehavior" in document.documentElement.style) {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Scroll suave para o topo
      });
    } else {
      // Fallback para navegadores que não suportam scroll suave
      window.scrollTo(0, 0);
    }
  });
});
