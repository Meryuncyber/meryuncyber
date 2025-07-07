// 🔹 Sayfa yüklendiğinde en üste git
window.scrollTo(0, 0);

// 🔹 Scroll animasyonları için gözleme fonksiyonu
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fadeIn");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2,
});

// 🔹 Fade animasyonuna sahip tüm öğeleri seç
document.querySelectorAll(".fade-on-scroll").forEach((el) => {
  observer.observe(el);
});

// 🔹 Scroll to top butonu (isteğe bağlı)
const scrollTopBtn = document.getElementById("scroll-top-btn");
if (scrollTopBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.remove("hidden");
    } else {
      scrollTopBtn.classList.add("hidden");
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
