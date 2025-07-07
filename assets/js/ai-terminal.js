// ai-terminal.js — MerYunCyber yapay zeka terminal simülasyonu

document.addEventListener("DOMContentLoaded", () => {
  const terminal = document.getElementById("ai-terminal");
  const inputField = document.getElementById("terminal-input");
  const outputField = document.getElementById("terminal-output");

  // Sahte komut yanıtları
  const responses = {
    help: [
      "Available commands:",
      "- help          → Show this help message",
      "- about         → Learn about MerYunCyber",
      "- projects      → List all current projects",
      "- contact       → Show email address",
      "- clear         → Clear the terminal"
    ],
    about: [
      "MerYunCyber is a cybersecurity initiative founded by Yunus Taymur.",
      "Focused on privacy, defense, and AI-powered tools for the modern world."
    ],
    projects: [
      "- ŞifreMini       → AI-based password manager",
      "- GüvenliCebim    → Smartphone security assistant",
      "- Elif No EXIF    → Privacy-focused photo sanitizer",
      "- Erişim Kalkanı  → Accessibility + security gateway"
    ],
    contact: [
      "You can reach us at:",
      "✉ meryuncyber@protonmail.com"
    ],
    clear: ["__clear__"]
  };

  // Yazma efekti
  function typeOutput(lines, index = 0) {
    if (index >= lines.length) return;

    const line = document.createElement("div");
    line.classList.add("typed-line");

    outputField.appendChild(line);

    let charIndex = 0;
    function typeChar() {
      if (charIndex < lines[index].length) {
        line.textContent += lines[index][charIndex];
        charIndex++;
        setTimeout(typeChar, 20);
      } else {
        typeOutput(lines, index + 1);
      }
    }

    // Özel "clear" komutu
    if (lines[index] === "__clear__") {
      outputField.innerHTML = "";
      return;
    }

    typeChar();
  }

  // Komut gönderildiğinde
  inputField.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const command = inputField.value.trim().toLowerCase();
      inputField.value = "";

      const inputEcho = document.createElement("div");
      inputEcho.textContent = "> " + command;
      inputEcho.classList.add("terminal-input-echo");
      outputField.appendChild(inputEcho);

      if (responses.hasOwnProperty(command)) {
        typeOutput(responses[command]);
      } else {
        typeOutput([`Unknown command: "${command}". Type 'help' to see available commands.`]);
      }

      terminal.scrollTop = terminal.scrollHeight; // Auto-scroll
    }
  });
});
