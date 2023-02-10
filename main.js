import './style.css'

const inputs = document.getElementsByTagName("input");
const passwordInput = document.querySelector("#password");
const passwordConfirmInput = document.querySelector("#confirm-password");
const errorMessage = document.querySelector(".error-message");

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("blur", function () {
        if (!inputs[i].validity.valid) {
            inputs[i].classList.add("border-red-600");
        } else if (inputs[i].validity.valid) {
            inputs[i].classList.add("border-green-600");
        } else {
            inputs[i].classList.remove("border-red-600");
        }
    });
}

function validatePassword() {
  if (passwordInput.value !== passwordConfirmInput.value) {
    passwordInput.classList.add("border-red-600");
    passwordConfirmInput.classList.add("border-red-600");
    errorMessage.classList.remove("hidden");
  } else {
    passwordInput.classList.remove("border-red-600");
    passwordConfirmInput.classList.remove("border-red-600");
    errorMessage.classList.add("hidden");
  }
}

passwordConfirmInput.addEventListener("blur", validatePassword);
passwordInput.addEventListener("input", validatePassword);
