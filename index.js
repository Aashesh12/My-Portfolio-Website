// MOBILE MENU TOGGLE
const toggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
const form = document.querySelector("form");
const message = document.getElementById("form-message");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  try {
    const res = await fetch("YOUR_API_URL", {
      method: "POST",
      body: new FormData(form)
    });

    const result = await res.json();

    if (result.success) {
      message.style.display = "block";
      message.style.color = "lightgreen";
      message.textContent = "I'll get back to you soon 🙂";

      form.reset();
    } else {
      message.style.display = "block";
      message.style.color = "red";
      message.textContent = "Failed to send message";
    }

  } catch (error) {
    console.error(error);

    message.style.display = "block";
    message.style.color = "red";
    message.textContent = "Server error";
  }
});
