console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}
const container = document.body;

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// 1.create article;
const articleElement = document.createElement("article");
articleElement.className = "post";
// 2. create p;
const pElement = document.createElement("p");
pElement.className = "post__content";
pElement.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
//3. create footer;
const footerElement = document.createElement("footer");
footerElement.className = "post__footer";
//4. create span;
const spanElement = document.createElement("span");
spanElement.className = "post__username";
spanElement.textContent = "@username";
//5. create button;
const buttonElement = document.createElement("button");
buttonElement.className = "post__button";
buttonElement.textContent = "♥ Like";
buttonElement.type = "button";
//6. add event on the button;
buttonElement.addEventListener("click", (event) => {
  buttonElement.classList.toggle("post__button--liked");
});

articleElement.append(pElement, footerElement);
footerElement.append(spanElement, buttonElement);
container.append(articleElement);

// Exercise:
// Use document.createElement() and append another social media post to the body.
