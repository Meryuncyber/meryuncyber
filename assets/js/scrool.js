// scroll.js — MerYunCyber scroll animasyonlarını yönetir

document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-on-scroll");

  const appearOptions = {
    threshold: 0.15, // %15'i görünür olunca başlasın
    rootMargin: "0px 0px -100px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("visible");
      observer.unobserve(entry.target); // tekrar tekrar tetiklenmesin
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });

  // Yukarı çık butonu
  const scrollTopBtn = document.getElementById("scroll-top-btn");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add("show");
    } else {
      scrollTopBtn.classList.remove("show");
    }
  });

  scrollTopBtn?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
