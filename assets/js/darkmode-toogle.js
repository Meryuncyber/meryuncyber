// darkmode-toggle.js — MerYunCyber tema geçişi kontrolü

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("darkmode-toggle");
  const htmlElement = document.documentElement;
  const storageKey = "meryuncyber-theme";

  // Kullanıcının tercihi varsa uygula
  const savedTheme = localStorage.getItem(storageKey);
  if (savedTheme === "dark") {
    htmlElement.classList.add("dark");
  } else if (savedTheme === "light") {
    htmlElement.classList.remove("dark");
  } else {
    // Sistem temasına göre varsayılan ayar
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    htmlElement.classList.toggle("dark", prefersDark);
  }

  // Butona tıklanınca tema geçişi
  toggleButton?.addEventListener("click", () => {
    const isDark = htmlElement.classList.contains("dark");
    if (isDark) {
      htmlElement.classList.remove("dark");
      localStorage.setItem(storageKey, "light");
    } else {
      htmlElement.classList.add("dark");
      localStorage.setItem(storageKey, "dark");
    }
  });
});
