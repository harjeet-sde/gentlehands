// Whatsapp Button Booking System

function sendToWhatsApp() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const service = document.getElementById("service").value;

  if (!name || !phone || !date || !time || !service) {
    alert("Please fill all fields");
    return;
  }

  const message = `New Appointment Request:
Name: ${name}
Phone: ${phone}
Service: ${service}
Date: ${date}
Time: ${time}`;

  const whatsappURL = `https://wa.me/919999999999?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank");
}

// Home Index Page Book Consultation

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

// Services Page Book Consultation

function sendWhatsApp() {
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!name || !phone) {
    alert("Fill required fields");
    return;
  }

  const message = `Hello, I want to book a consultation.

Name: ${name}
Phone: ${phone}
Email: ${email}`;

  const url =
    "https://api.whatsapp.com/send?phone=919927150034&text=" +
    encodeURIComponent(message);

  window.location.href = url;
}

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

// document.addEventListener("DOMContentLoaded", () => {
//   const areaTrack = document.querySelector(".area-track");

//   const locations = [
//     "Book Appointment in Delhi South",
//     "Kalkaji",
//     "Greater Kailash 1",
//     "Greater Kailash 2",
//     "CR Park",
//     "East of Kailash",
//     "Defence Colony",
//     "Lajpat Nagar",
//     "Saket",
//     "Nearby Areas",
//     "Nehru Place",
//     "Govindpuri",
//     "Alaknanda",
//     "Tughalkabad",
//     "Amar Colony",
//     "Harkesh Nagar",
//     "New Friends Colony",
//     "Kalkaji Extension",
//   ];

//   areaTrack.innerHTML = "";

//   locations.forEach((location) => {
//     const slug = location
//       .toLowerCase()
//       .replace(/[^a-z0-9\s]/g, "")
//       .replace(/\s+/g, "-");

//     areaTrack.innerHTML += `
//       <a href="/appointment/${slug}" class="area-pill">
//         <span>${location}</span>
//         <span class="arrow">→</span>
//       </a>
//     `;
//   });
// });
