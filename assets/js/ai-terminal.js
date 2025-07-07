// AI Terminal Element Seçimi
const terminal = document.getElementById("ai-terminal");
const input = document.getElementById("ai-input");
const output = document.getElementById("ai-output");

const responses = {
  "help": "Available commands: help, mission, team, shifremeni, elif, exit",
  "mission": "MerYunCyber builds security tools for the forgotten — accessible, local-first and AI-assisted.",
  "team": "Founders: Yunus Taymur (Cybersecurity Architect) & Meryem Yücel (Social Strategist).",
  "shifremeni": "ŞifreMini is a lightweight password manager — offline, fast, and deadly simple.",
  "elif": "ELIF No EXIF is a metadata scrubber for privacy-conscious users. Fast, reliable, free.",
  "exit": "Closing terminal... Stay safe out there.",
  "": "Please enter a command. Type 'help' if you're lost."
};

// Komut Gönderildiğinde
input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    const command = input.value.trim().toLowerCase();
    const response = responses[command] || "Unknown command. Type 'help' to see available commands.";

    const line = document.createElement("div");
    line.innerHTML = `<span class="text-cyan-400">$ ${command}</span><br><span>${response}</span>`;
    line.classList.add("mb-4", "animate-fadeIn");

    output.appendChild(line);
    input.value = "";
    terminal.scrollTop = terminal.scrollHeight;
  }
});
