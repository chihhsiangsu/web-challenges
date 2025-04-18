import { add, subtract, multiply, divide } from "./index.js";

//add test

test("returns 5 if called with add(2, 3)", () => {
  let result = add(2, 3);
  expect(result).toBe(5);
});
test("returns a negative value if the greater argument is negative", () => {
  let result = add(-10, 3);
  expect(result).toBeLessThan(0);
});
test("returns a value close to 0.3 if called with add(0.1, 0.2)", () => {
  let result = add(0.1, 0.2);
  expect(result).toBeCloseTo(0.3);
});

//subtract test

test("returns 10 if called with subtract(15, 5)", () => {
  let result = subtract(15, 5);
  expect(result).toBe(10);
});
test("returns a negative value if the second argument is greater than the first one", () => {
  let result = subtract(5, 10);
  expect(result).toBeLessThan(0);
});

//multiply test
test("returns 8 if called with multiply(2, 4)", () => {
  let result = multiply(2, 4);
  expect(result).toBe(8);
});
test("returns a negative value if only the first argument is negative", () => {
  let result = multiply(-5, 4);
  expect(result).toBeLessThan(0);
});
test("returns a negative value if only the second argument is negative", () => {
  let result = multiply(5, -4);
  expect(result).toBeLessThan(0);
});
test("returns a positive value if called with two negative arguments", () => {
  let result = multiply(-5, -4);
  expect(result).toBeGreaterThan(0);
});

//divide test
test("returns 3 if called with divide(9, 3)", () => {
  let result = divide(9, 3);
  expect(result).toBe(3);
});
test("returns `You should not do this!` if called with 0 as second argument", () => {
  let result = divide(9, 0);
  expect(result).toBe("You should not do this!");
});
