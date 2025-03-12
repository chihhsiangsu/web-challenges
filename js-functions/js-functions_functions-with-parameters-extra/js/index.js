console.clear();

/*
1: The function calls below are not working properly yet. Modify the function
   `printSquare` to log the square of the parameter to the console.
   The formula is: square = number * number
*/

function printSquare(a) {
  const square = a * a;
  return square;
}
const firstPrintSquare = printSquare(3);
console.log(firstPrintSquare);
const secondPrintSquare = printSquare(5);
console.log(secondPrintSquare);

/*
2: Write a function that accepts the radius of a circle as a parameter and logs
   the circumference to the console. The function does not exist yet.
   The formula is: circumference = 2 * Pi * radius
*/

// Uncomment the following function calls and implement the function `printCircumference`.

function printCircleFerence(radius) {
  const circleFerence = 2 * Math.PI * radius;
  return circleFerence;
}

const myCircleFerence = printCircleFerence(4);
console.log(myCircleFerence);
const mySecondCircleFerence = printCircleFerence(6);
console.log(mySecondCircleFerence);
// printCircumference(4);
// printCircumference(6);

/*
3: Write a function that accepts the width and length of a rectangle
   and logs the following text to the console: "The area of the rectangle is ?".
   The function should replace the question mark "?" with the correct area.
   The function does not exist yet.
   The formula is: area = width * length
*/

// Uncomment the following function calls and implement the function `printRectangleArea`.

function printRectangleArea(width, length) {
  const area = width * length;
  console.log(area);
}

printRectangleArea(5, 7);
printRectangleArea(3, 4);
// printRectangleArea(5, 7);
// printRectangleArea(3, 4);
