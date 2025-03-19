console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // Reset the star container before re-rendering stars
  starContainer.innerHTML = "";

  // --v-- write or modify code below this line --v--
  for (let counter = 1; counter <= 5; counter++) {
    const starImage = document.createElement("img");

    if (counter <= filledStars) {
      starImage.src = "assets/star-filled.svg";
    } else {
      starImage.src = "assets/star-empty.svg";
    }

    starImage.addEventListener("click", () => {
      renderStars(counter);
    });

    starContainer.append(starImage);
  }
  // --^-- write or modify code above this line --^--
}

renderStars();
