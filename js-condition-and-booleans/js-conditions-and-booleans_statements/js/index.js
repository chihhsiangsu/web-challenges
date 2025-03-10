console.clear();

// Part 1: Password

const SUPER_SECRET_PASSWORD = "h4x0r1337";
const receivedPassword = "password1234";

if (receivedPassword === SUPER_SECRET_PASSWORD) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 6;

if (number % 2 === 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 999;

if (numberOfHotdogs < 5) {
  console.log("Price= " + "2" + "euros");
} else if (5 < numberOfHotdogs < 100) {
  console.log("Price= " + "1.5" + "euros");
} else if (100 < numberOfHotdogs < 1000000) {
  console.log("Price= " + "1" + "euro");
} else if (numberOfHotdogs > 1000000) {
  console.log("Price= " + "1" + "euro");
}

// Part 4: Daytime
const currentHour = 12;

let statement = "";

statement = currentHour < 17 ? "Still need to learn..." : "Party time!";

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";
const greeting = "Hello " + (userName === "Chales" ? "Coach" : userName) + "!";

console.log(greeting);
