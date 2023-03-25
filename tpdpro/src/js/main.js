const form = document.querySelector("form");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!isEmailValid(emailInput.value)) {
    emailError.style.display = "block";
  } else {
    emailError.style.display = "none";
    form.submit();
  }
});

function isEmailValid(email) {
  const emailRegex = /\S+@\S+.\S+/;
  return emailRegex.test(email);
}
