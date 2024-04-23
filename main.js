const dismissBtn = document.getElementById("dismiss");
const submitBtn = document.getElementById("submit");
const signUp = document.querySelector(".sign-up");
const success = document.querySelector(".success");
const form = document.getElementById("form");
const input = document.getElementById("input");
const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const emailConfirm = document.getElementById("email-confirm");
const error = document.getElementById("error");

function handleSubmit(e) {
  e.preventDefault();
}

form.addEventListener("submit", handleSubmit);

submitBtn.addEventListener("click", () => {
  if (input.value == "") {
    error.innerText = "Valid email required";
    console.log("empty");
  } else if (input.value.match(regEx)) {
    signUp.classList.toggle("submit-valid");
    success.classList.add("display-success");
    let email = input.value;
    emailConfirm.innerText = `A confirmation email has been sent to ${email}. Please
    open it and click the button inside to confirm your subscription.`;
    console.log("valid");
  } else {
    error.innerText = "Valid email required";
    console.log("invalid");
  }
});

dismissBtn.addEventListener("click", () => {
  input.value = "";
  signUp.classList.toggle("submit-valid");
  success.classList.remove("display-success");
});
