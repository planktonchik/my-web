document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  sections.forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
  });

  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  });

  const navLinks = document.querySelector(".nav-links");

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
});

// Використовуємо Intersection Observer API для відслідковування видимості елемента

// Використовуємо Intersection Observer API для відслідковування видимості елемента
