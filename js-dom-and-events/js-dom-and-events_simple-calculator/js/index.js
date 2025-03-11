console.clear();

const operand1 = 12;
const operand2 = 4;

// ----- Mathematical Operations -----

// Step 1: Use `document.querySelector` to select each button by its `data-js` attribute.

// --v-- write your code here --v--

const addBotton = document.querySelector('[data-js="add"]');
const subtractBotton = document.querySelector('[data-js="subtract"]');
const multiplyBotton = document.querySelector('[data-js="multiply"]');
const divideBotton = document.querySelector('[data-js="divide"]');
const exponentBotton = document.querySelector('[data-js="exponent"]');
const moduleBotton = document.querySelector('[data-js="modulo"]');

// --^-- write your code here --^--

/* 
Step 2: Add event listeners for each mathematical operation:

For each operation (add, subtract, multiply, divide, exponent, and modulo):
1. Add an event listener to the corresponding button.
2. Within the event listener, perform the operation using `operand1` and `operand2`.
3. Store the result in a variable.
4. Log the result to the console.
*/

// --v-- write your code here --v--
const addResult = operand1 + operand2;
addBotton.addEventListener("click", () => {
  console.log("Add -> " + addResult);
});

const substractResult = operand1 - operand2;
subtractBotton.addEventListener("click", () => {
  console.log("Subtract -> " + substractResult);
});

const multiplyResult = operand1 * operand2;
multiplyBotton.addEventListener("click", () => {
  console.log("Subtract -> " + multiplyResult);
});

const divideResult = operand1 / operand2;
divideBotton.addEventListener("click", () => {
  console.log("Subtract -> " + divideResult);
});

const exponentResult = operand1 ** operand2;
exponentBotton.addEventListener("click", () => {
  console.log("Subtract -> " + exponentResult);
});

const moduleResult = operand1 % operand2;
moduleBotton.addEventListener("click", () => {
  console.log("Subtract -> " + moduleResult);
});

// --^-- write your code here --^--

// ----- Update the First Operand -----

/*
In the following section, update the value of `operand1` using the buttons in the "Update the First Operand" section.
Each button should adjust the value of `operand1` and log the new value to the console.

Hint: To allow `operand1` to be updated, you might need to change its declaration.

Step 1: Select each button for updating `operand1` by its `data-js` attribute.
Step 2: Add event listeners to update `operand1` based on the button clicked. Log the updated value to the console.
*/

// --v-- write your code here --v--
console.log(document);
const increaseByOne = document.querySelector('[data-js="increase-by-one"]');
const increaseByFive = document.querySelector('[data-js="increase-by-five"]');
const decreaseByOne = document.querySelector('[data-js="decrease-by-one"]');
const decreaseByFive = document.querySelector('[data-js="decrease-by-five"]');
const multiplyByTwo = document.querySelector('[data-js="multiply-by-two"]');
const divideByTwo = document.querySelector('[data-js="divide-by-two"]');

const increaseByOneResult = operand1 + 1;
increaseByOne.addEventListener("click", () => {
  console.log("Operand1 +1 -> " + increaseByOneResult);
});

const increaseByFiveResult = operand1 + 5;
increaseByFive.addEventListener("click", () => {
  console.log("Operand1 +5 -> " + increaseByFiveResult);
});

const decreaseByOneResult = operand1 - 1;
decreaseByOne.addEventListener("click", () => {
  console.log("Operand1 -1 -> " + decreaseByOneResult);
});

const decreaseByFiveResult = operand1 - 5;
decreaseByFive.addEventListener("click", () => {
  console.log("Operand1 -5 -> " + decreaseByFiveResult);
});

const multiplyByTwoResult = operand1 * 2;
multiplyByTwo.addEventListener("click", () => {
  console.log("Operand1 *2 -> " + multiplyByTwoResult);
});

const divideByTwoResult = operand1 / 2;
divideByTwo.addEventListener("click", () => {
  console.log("Operand1 /2 -> " + divideByTwoResult);
});

// --^-- write your code here --^--
