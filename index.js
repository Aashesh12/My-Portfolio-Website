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
      alert("Message sent successfully!");
      form.reset(); // clear form
    } else {
      alert("Failed to send message");
    }
  } catch (error) {
    console.error(error);
    alert("Server error");
  }
});
