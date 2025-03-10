console.clear();

// EXERCISE 1
// Create an object `personWithNameAgeEmail` with the properties "name", "age" and "email".

const personWithNameAgeEmail = {
  example: "example",
  name: "Chalres",
  age: "21",
  email: "Charles@hotmail.com",
};

// EXERCISE 2
// Set the values of `nameOfAlex` and `ageOfAlex` to match the corresponding values in the `personAlex` object.

const personAlex = {
  name: "Alex",
  age: 24,
};

const nameOfAlex = personAlex.name;
const ageOfAlex = personAlex.age;

// EXERCISE 3
// Change the `name` to "Alex" and `age` to "35" by updating the `personToChange`object: `person.existingProperty = newValue`.

const personToChange = {
  name: "Kim",
  age: 24,
};

const person = personToChange;
person.name = "Alex";
person.age = 35;

// EXERCISE 4
// Add the properties `age` with value "5" and `breed` with value "husky" to the `petPluto` object: `pet.newProperty = newValue`.

const petPluto = {
  name: "Pluto",
  species: "dog",
};

const pet = petPluto;
pet.age = 5;
pet.breed = "husky";

export {
  personWithNameAgeEmail,
  nameOfAlex,
  ageOfAlex,
  personToChange,
  petPluto,
};
