const toast = (message) => {
  const notice = document.createElement("div");
  notice.className = "toast";
  notice.textContent = message;
  document.body.appendChild(notice);

  requestAnimationFrame(() => {
    notice.classList.add("toast--show");
  });

  setTimeout(() => {
    notice.classList.remove("toast--show");
    setTimeout(() => notice.remove(), 300);
  }, 2400);
};

const ctaButton = document.getElementById("ctaButton");
const primaryAction = document.getElementById("primaryAction");
const secondaryAction = document.getElementById("secondaryAction");
const contactForm = document.getElementById("contactForm");

[ctaButton, primaryAction, secondaryAction].forEach((button) => {
  button.addEventListener("click", () => {
    toast("Thanks! A strategist will reach out shortly.");
  });
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  toast("Request received. We will reply within 48 hours.");
  contactForm.reset();
});
