console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", (event) => {
  event.preventDefault();

  const newMessage = document.createElement("li");
  newMessage.textContent = "new message";
  newMessage.classList.add("toast-container__message");

  toastContainer.append(newMessage);
});

clearButton.addEventListener("click", (event) => {
  event.preventDefault();
  toastContainer.textContent = "";
  // Exercise: Clear the stack of toast messages
});
