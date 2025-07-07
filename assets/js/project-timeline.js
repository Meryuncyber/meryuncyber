// Yol haritası verileri (İngilizce)
const roadmap = [
  {
    icon: "💡",
    title: "Ideation",
    description: "Problem discovery and early brainstorming.",
    date: "Jan 2025"
  },
  {
    icon: "📝",
    title: "Planning",
    description: "Technical planning, architecture, and research.",
    date: "Feb – Mar 2025"
  },
  {
    icon: "🧪",
    title: "Prototype",
    description: "MVP development and initial testing.",
    date: "Apr 2025"
  },
  {
    icon: "🚀",
    title: "Launch",
    description: "First stable version and limited public release.",
    date: "aug 2025"
  },
  {
    icon: "🌍",
    title: "Globalization",
    description: "Localization, accessibility, and platform expansion.",
    date: " Q4 2025"
  },
  {
    icon: "🔒",
    title: "Security Audit",
    description: "Penetration tests and zero-day hardening.",
    date: "Q4 2025"
  }
];

// HTML'e çizim işlemi
const timelineContainer = document.getElementById("timeline");

roadmap.forEach((step, index) => {
  const block = document.createElement("div");
  block.className = "fade-on-scroll border-l-4 border-cyan-500 pl-4 mb-8";

  block.innerHTML = `
    <div class="flex items-center space-x-4 mb-2">
      <div class="text-2xl">${step.icon}</div>
      <h3 class="text-xl font-semibold text-cyan-300">${step.title}</h3>
      <span class="text-sm text-gray-500">${step.date}</span>
    </div>
    <p class="text-gray-300">${step.description}</p>
  `;

  timelineContainer.appendChild(block);
});
