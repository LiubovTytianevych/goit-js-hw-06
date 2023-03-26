const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", () => {
  const inputLength = validationInput.getAttribute("data-length");
  const inputValue = validationInput.value;

  if (inputValue.length === Number(inputLength)) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});