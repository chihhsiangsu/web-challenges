console.clear();

/*
1: Create the data for a book in an online store. Define variables for the following details:
  - The title of the book
  - The author of the book
  - The book's rating
  - The number of copies sold
*/

// --v-- write your code here --v--

const title = "Harry Porter";
const auther = "J.K. Rowling";
let rating = 6.8;
let numberOfCopiesSold = 200000;

// --^-- write your code here --^--

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Then:
- Increase the number of sales.
- Update the book's rating.
- Log all variables to the console again after making these updates.
*/

// --v-- write your code here --v--
console.log("Title: " + title);
console.log("Author: " + auther);
console.log("Rating " + rating);
console.log("sales: " + numberOfCopiesSold);

rating += 1;
numberOfCopiesSold += 20000;

console.log("Title: " + title);
console.log("Author: " + auther);
console.log("Rating " + rating);
console.log("sales: " + numberOfCopiesSold);

// --^-- write your code here --^--

/*
3: The logging code above is repetitive and hard to maintain.
   Refactor your code by doing the following:

 - Write a function called `logBookData` that logs all the book details to the console.
 - Replace the existing `console.log` statements with calls to this function.
 - Then, increase the number of sales two more times and log the updated details after each increase.
*/

// --v-- write your code here --v--
function logBookData() {
  console.log("Title: " + title);
  console.log("Author: " + auther);
  console.log("Rating " + rating);
  console.log("sales: " + numberOfCopiesSold);
}

logBookData();

numberOfCopiesSold += 10000;
numberOfCopiesSold += 20000;

logBookData();

// --^-- write your code here --^--
