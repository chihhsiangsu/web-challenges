console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data.firstName);
  console.log(data.lastName);
  console.log(data.age);
  console.log(data.email);
  console.log(data.complaint);
  console.log(data.details);
  console.log(data.badness);
  console.log(data.orderDate);
  console.log(data.tos);

  event.target.elements.firstName.focus();
  event.target.reset();
});
