document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form");
  contactForm.onsubmit = (e) => {
    e.preventDefault();

    const fullName = document.getElementById("full-name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (fullName === "" || email === "" || message === "") {
      alert("Please fill all the details!");
    } else {
      alert("Message sent!");
      console.log({ fullName, email, message });
      contactForm.reset();
    }
  };
});
