console.log("Welcome on Contact.js");

document
  .getElementById("appointmentForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let service = document.getElementById("service").value;
    let area = document.getElementById("area").value;
    let message = document.getElementById("message").value;

    let text = `Hello Gentle Hands Physiocare,

New Appointment Request

Name: ${name}
Phone: ${phone}
Email: ${email}
Service: ${service}
Area: ${area}
Condition: ${message}`;

    let url = "https://wa.me/919927150034?text=" + encodeURIComponent(text);

    window.open(url, "_blank");
  });
