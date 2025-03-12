console.clear();

const input = document.querySelector('[data-js="first-input"]');
const uppercaseButton = document.querySelector('[data-js="button-uppercase"]');

uppercaseButton.addEventListener("click", () => {
  input.value = input.value.toUpperCase();
});

const lowerCaseButton = document.querySelector('[data-js="button-lowercase"]');

lowerCaseButton.addEventListener("click", () => {
  input.value = input.value.toLowerCase();
});
