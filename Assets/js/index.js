
document
  .getElementById("booking")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();

    const message = `Hello, I want to book an appointment.

Name: ${name}
Phone: ${phone}
Email: ${email || "Not provided"}`;

    const whatsappURL =
      "https://wa.me/919927150034?text=" +
      encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
  });

  // Frequently Asked Questions Section
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Frequently Asked Questions Section
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".faq-section .faq-item");
  const buttons = [...items].map((item) => item.querySelector(".faq-question"));

  const setOpen = (item, open) => {
    item.classList.toggle("active", open);
    item.querySelector(".faq-question").setAttribute("aria-expanded", String(open));
  };

  items.forEach((item) => {
    item.querySelector(".faq-question").addEventListener("click", () => {
      const willOpen = !item.classList.contains("active");

      // close all others (only one open at a time)
      items.forEach((other) => {
        if (other !== item) setOpen(other, false);
      });

      setOpen(item, willOpen);
    });
  });

  // Keyboard navigation: Arrow Up/Down, Home, End
  buttons.forEach((btn, i) => {
    btn.addEventListener("keydown", (e) => {
      const targets = {
        ArrowDown: i + 1,
        ArrowUp: i - 1,
        Home: 0,
        End: buttons.length - 1,
      };
      if (e.key in targets) {
        e.preventDefault();
        buttons[(targets[e.key] + buttons.length) % buttons.length].focus();
      }
    });
  });
});



console.log("Welcome On Index.js")