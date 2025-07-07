// project-timeline.js — Yol haritasını emoji ile gösterir

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("project-timeline");

  if (!container) return;

  fetch("/data/roadmap.json")
    .then(response => response.json())
    .then(data => {
      data.forEach(step => {
        const stepElement = document.createElement("div");
        stepElement.classList.add("timeline-step", "fade-on-scroll");

        const emoji = document.createElement("span");
        emoji.classList.add("emoji");
        emoji.textContent = step.emoji;

        const text = document.createElement("span");
        text.classList.add("text");
        text.textContent = step.text;

        stepElement.appendChild(emoji);
        stepElement.appendChild(text);
        container.appendChild(stepElement);
      });
    })
    .catch(err => {
      console.error("Yol haritası verisi yüklenemedi:", err);
      container.innerHTML = "<p class='text-red-500'>Yol haritası yüklenemedi.</p>";
    });
});
