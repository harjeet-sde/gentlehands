console.log("Welcome On Services.js");


// What Our Patients Say Section
const slider = document.getElementById("reviewSlider");
const cards = slider.children;
let index = 0;

function getVisibleCards() {
  if (window.innerWidth >= 1024) return 3;
  if (window.innerWidth >= 768) return 2;
  return 1;
}

function autoSlide() {
  const visible = getVisibleCards();
  const total = cards.length;

  index++;

  if (index > total - visible) {
    index = 0;
  }

  slider.style.transform = `translateX(-${index * (100 / visible)}%)`;
}

let slideInterval = setInterval(autoSlide, 3000);

window.addEventListener("resize", () => {
  index = 0;
  slider.style.transform = `translateX(0%)`;
});

slider.addEventListener("mouseenter", () => clearInterval(slideInterval));
slider.addEventListener("mouseleave", () => {
  slideInterval = setInterval(autoSlide, 3000);
});



// Book Consultation Section

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
