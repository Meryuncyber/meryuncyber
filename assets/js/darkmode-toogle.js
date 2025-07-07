// 🌗 Tema geçiş butonu
const toggleBtn = document.getElementById("darkmode-toggle");

// 🌓 Tema durumu kontrolü
function applyTheme(theme) {
  if (theme === "light") {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
}

// 🧠 Sayfa yüklendiğinde tema yükle
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "dark";
  applyTheme(savedTheme);
});

// 🔁 Butona tıklanınca geçiş yap
toggleBtn.addEventListener("click", () => {
  const current = localStorage.getItem("theme") || "dark";
  const next = current === "dark" ? "light" : "dark";
  applyTheme(next);
});
