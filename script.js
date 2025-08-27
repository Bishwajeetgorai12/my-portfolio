// Typing effect
const typingElement = document.querySelector(".typing");
const words = ["Bishwajeet Gorai ", "a Developer", "a Designer", "a Creator"];
let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect() {
  currentWord = words[wordIndex];
  let displayText = currentWord.substring(0, charIndex);

  typingElement.textContent = displayText;

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(typeEffect, 120);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 60);
  } else {
    if (!isDeleting) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
    } else {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(typeEffect, 200);
    }
  }
}
typeEffect();

// Scroll Reveal Effect
const reveals = document.querySelectorAll("section");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  const revealPoint = 100;

  reveals.forEach((reveal) => {
    const revealTop = reveal.getBoundingClientRect().top;

    if (revealTop < windowHeight - revealPoint) {
      reveal.classList.add("active");
    } else {
      reveal.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);


document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  const messageBox = document.createElement("p");
  form.appendChild(messageBox);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      let response = await fetch("YOUR_WEB_APP_URL_HERE", {
        method: "POST",
        body: formData
      });

      let result = await response.json();
      if (result.result === "success") {
        messageBox.textContent = "✅ Message sent successfully!";
        messageBox.style.color = "green";
        form.reset();
      } else {
        messageBox.textContent = "⚠️ Error sending message.";
        messageBox.style.color = "red";
      }
    } catch (err) {
      messageBox.textContent = "⚠️ Network error.";
      messageBox.style.color = "red";
    }
  });
});
