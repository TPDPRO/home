const contact_form = document.querySelector("form");
const feedback = document.querySelector("#feedback");

contact_form.addEventListener("submit", function (event) {
  event.preventDefault();

  // validate the form
  if (!contact_form.checkValidity()) {
    return;
  }

  // send the form data
  const data = new FormData(contact_form);
  fetch(contact_form.action, {
    method: contact_form.method,
    body: data,
  })
    .then((response) => {
      if (response.ok) {
        // display a success message
        feedback.textContent = "Your message has been sent!";
        feedback.style.display = "block";
        contact_form.reset();
      } else {
        // display an error message
        feedback.textContent =
          "There was an error sending your message. Please try again.";
        feedback.style.display = "block";
      }
    })
    .catch((error) => {
      // display an error message
      feedback.textContent =
        "There was an error sending your message. Please try again.";
      feedback.style.display = "block";
    });
});
