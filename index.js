// MOBILE MENU TOGGLE
const toggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  try {
    const res = await fetch("http://localhost:5000/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
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
