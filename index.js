// MOBILE MENU TOGGLE
const toggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


(function() {
emailjs.init("8A1cIvMQ7tQCYW_SV"); // replace with your EmailJS public key
})();

window.onload = function() {
const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
event.preventDefault(); // prevent page reload
// collect form data
const templateParams = {
name: document.getElementById("name").value,

email: document.getElementById("email").value,
message: document.getElementById("message").value
};
// Send email using EmailJs
});
emailjs.send("service_iycgcvd", "template_x6duo3w", templateParams)
.then(function(response) {
alert("Email sent successfully!");
console.log("SUCCESS!", response.status, response.text);
}, function(error) {
alert("Failed to send email. Check console for details.");
console.error("FAILED...", error);
});
};