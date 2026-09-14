// Book Your Appointment Section
document
  .getElementById("appointmentForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();

    const message = `Hello, I want to book an appointment.

Name: ${name}
Phone: ${phone}
Email: ${email}`;

    const whatsappURL =
      "https://wa.me/919927150034?text=" + encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
  });

// Frequently Asked Questions Section
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

const faqBtns = document.querySelectorAll(".faq-btn");

faqBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;

    // close all
    document.querySelectorAll(".faq-content").forEach((c) => {
      if (c !== content) c.classList.add("hidden");
    });

    // toggle current
    content.classList.toggle("hidden");
  });
});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  item.querySelector(".faq-question").addEventListener("click", () => {
    item.classList.toggle("active");
  });
});


console.log("Welcome On Index.js")