const dismissBtn = document.getElementById("dismiss");
const submitBtn = document.getElementById("submit");
const signUp = document.querySelector(".sign-up");
const success = document.querySelector(".success");
const form = document.getElementById("form");
const input = document.getElementById("input");
const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const error = document.getElementById("error");
const emailSpan = document.getElementById("email-span");
const emailConfirm = document.getElementById("email-confirm");
emailConfirm.style.lineHeight = "1.5";

function handleSubmit(e) {
  e.preventDefault();
}

form.addEventListener("submit", handleSubmit);

submitBtn.addEventListener("click", () => {
  if (input.value == "") {
    error.style.color = "hsl(4, 100%, 67%)";
    error.innerText = "Valid email required";
    input.style.backgroundColor = "hsl(4, 100%, 67%, 0.2)";
    input.style.color = "hsl(4, 100%, 67%)";
  } else if (input.value.match(regEx)) {
    signUp.classList.toggle("submit-valid");
    success.classList.add("display-success");
    let email = input.value;
    emailSpan.textContent = email;
    emailSpan.style.fontWeight = "700";
  } else {
    error.style.color = "hsl(4, 100%, 67%)";
    input.style.backgroundColor = "hsl(4, 100%, 67%, 0.2)";
    error.innerText = "Valid email required";
    input.style.color = "hsl(4, 100%, 67%)";
  }
});

dismissBtn.addEventListener("click", () => {
  input.value = "";
  signUp.classList.toggle("submit-valid");
  success.classList.remove("display-success");
});
