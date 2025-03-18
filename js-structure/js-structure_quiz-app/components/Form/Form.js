export function Form() {
  const form = document.createElement("form");
  form.classList.add("form");
  form.innerHTML = /* html */ `
          <label for="question">Your question:</label>
          <textarea
              id="question"
              rows="7"
              name="question"
              maxlength="150"
              data-js="input-question"
          ></textarea>
          <span class="form__character-count">
              <span data-js="amount-left-question"></span> characters left
          </span>
          <label for="answer">Your answer:</label>
          <textarea
              id="answer"
              rows="7"
              name="answer"
              maxlength="150"
              data-js="input-answer"
          ></textarea>
          <span class="form__character-count">
              <span data-js="amount-left-answer"></span> characters left
          </span>
          <label for="tags">Tags:</label>
          <input id="tags" type="text" name="tags" />
          <button class="form__submit-button" type="submit">Submit</button>
      `;

  const formFields = form.querySelectorAll('[data-js*="input"]');
  const counterOutputs = form.querySelectorAll("[data-js*=amount-left]");

  formFields.forEach((formField, index) => {
    counterOutputs.forEach((output) => {
      output.innerText = formField.maxLength;
    });
    formField.addEventListener("input", () => {
      const currentAmountLeft = formField.maxLength - formField.value.length;
      counterOutputs[index].innerText = currentAmountLeft;
    });
  });

  form.addEventListener("submit", handleFormSubmit);

  return form;
}

export function Card(props) {
  const card = document.createElement("article");
  card.classList.add("card");
  card.innerHTML = /* html */ `
		<h2 class="card__question" data-js="question"></h2>
		<button class="card__button-answer" type="button" data-js="answer-button">
			Show answer
		</button>
		<p class="card__answer" data-js="answer"></p>
		<ul class="card__tag-list" data-js="tags"></ul>
		<div class="card__button-bookmark" data-js="bookmark-button-wrapper"></div>
	`;

  const question = card.querySelector('[data-js="question"]');
  const answerButton = card.querySelector('[data-js="answer-button"]');
  const answer = card.querySelector('[data-js="answer"]');
  const tags = card.querySelector('[data-js="tags"]');
  const bookmarkButtonWrapper = card.querySelector(
    '[data-js="bookmark-button-wrapper"]'
  );

  question.textContent = props.question;
  answer.textContent = props.answer;

  props.tags.forEach((tag) => {
    const tagElement = document.createElement("li");
    tagElement.classList.add("card__tag-list-item");
    tagElement.textContent = "#" + tag;
    tags.append(tagElement);
  });

  function handleBookmarkButtonClick(event) {
    cards.find((card) => card.question === props.question).isBookmarked =
      !props.isBookmarked;
    // To prevent the need to rerender, we can just toggle the class here
    event.currentTarget.classList.toggle("bookmark--active");
  }

  const bookmarkButton = Bookmark({
    active: props.isBookmarked,
    onClick: handleBookmarkButtonClick,
  });
  bookmarkButtonWrapper.append(bookmarkButton);

  function handleAnswerButtonClick() {
    answer.classList.toggle("card__answer--active");
  }

  answerButton.addEventListener("click", handleAnswerButtonClick);

  return card;
}
