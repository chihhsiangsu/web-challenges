console.clear();

const textMealCost = "Meal Cost";
const mealCost = 50;
const tipPercentage = 0.1;
const textTipAmount = "Tip Amount";
const tipAmount = mealCost * tipPercentage;
const textTotalCost = "Total Cost";
const totalCost = mealCost + tipAmount;

console.log(textMealCost, mealCost);
console.log(textTipAmount, tipAmount);
console.log(textTotalCost, totalCost);

/*
Create a program that calculates the total cost of a meal, including tip, 
based on the cost of the meal and the percentage of the tip.

1. Define two variables:
   - A variable that stores the value of the meal cost.
   - A variable that stores the value of the tip percentage.

2. Calculate the tip amount by multiplying the meal cost by the tip percentage, and store the result in a variable called `tipAmount`.

3. Calculate the total cost of the meal, including tip, by adding `mealCost` and `tipAmount`, and store the result in a variable called `totalCost`.

4. Log a message to the console that includes the meal cost, tip amount, and total cost.
*/
