console.clear();

const firstInput = document.querySelector('[data-js="first-input"]');
const upperButton = document.querySelector('[data-js="button-uppercase"]');

upperButton.addEventListener("click", () => {
  const oldValue = firstInput.value;
  const newValue = oldValue.toUpperCase();
  firstInput.value = newValue;
});
