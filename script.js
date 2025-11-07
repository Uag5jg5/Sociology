// Простая логика для SPA: показывает только выбранный раздел
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll("nav a, .dropdown-content a");

function showSection(id) {
  sections.forEach(sec => sec.classList.remove("active"));
  const section = document.querySelector(id);
  if (section) section.classList.add("active");
}

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const href = link.getAttribute("href");
    showSection(href);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// показать домашнюю при загрузке
showSection("#home");
