document.querySelector(".menubtn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
  });

  ScrollReveal().reveal('.showcase');
  ScrollReveal().reveal('.newcards', { delay: 300 });
  ScrollReveal().reveal('.bannercard', { delay: 300 });
  ScrollReveal().reveal('.bannercard2', { delay: 300 });
 
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };