// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 20,
        behavior: "smooth"
      });
    }
  });
});

// Theme toggle
const toggleBtn = document.getElementById("toggleTheme");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");
  toggleBtn.textContent = body.classList.contains("dark-mode") ? "🌞" : "🌙";
});

// Typing animation
const text = ["Software Engineer", "Full Stack Developer", "Tech Enthusiast"];
let index = 0;
let charIndex = 0;
let currentText = '';
let isDeleting = false;
const typedText = document.querySelector(".typed-text");

function typeEffect() {
  if (index >= text.length) index = 0;
  currentText = text[index];

  if (isDeleting) {
    typedText.textContent = currentText.substring(0, charIndex--);
  } else {
    typedText.textContent = currentText.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1200);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index++;
    setTimeout(typeEffect, 500);
  } else {
    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);
