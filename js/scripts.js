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
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Зупиняємо стандартне відправлення форми

    // Перевіряємо, чи всі поля заповнені
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
      // Створюємо повідомлення "Дякую!"
      const thankYouMessage = document.createElement("p");
      thankYouMessage.textContent = "Thank you! Your message has been sent.";
      thankYouMessage.style.color = "#7a6c61";
      thankYouMessage.style.fontSize = "1.2rem";
      thankYouMessage.style.marginTop = "15px";

      // Додаємо повідомлення після форми
      form.appendChild(thankYouMessage);

      // Очищаємо форму після відправки
      form.reset();

      // Видаляємо повідомлення через 5 секунд
      setTimeout(() => {
        thankYouMessage.remove();
      }, 5000);
    }
  });
});
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

// Додаємо слухача події на клік по бургер-меню
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active"); // Додаємо або прибираємо клас active
});
