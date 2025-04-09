export function getAnimal(animals) {
  if (animals === "cats") {
    return `I totally love cats!`;
  } else if (!animals) {
    return `I do not like animals at all!`;
  } else {
    return `I like ${animals}!`;
  }
}
