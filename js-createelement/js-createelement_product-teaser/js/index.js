console.clear();

const name = "Queen angelfish";

const description =
  "With their bright colors and deep, laterally compressed bodies, marine angelfishes are some of the more conspicuous residents of the aquarium. The queen angelfish grows to be 45 cm. With neon blue and yellow scales and iridescent purple and orange markings, surprisingly it is not conspicuous, and actually hides very well, and is very shy.";
const category1 = "Freshwater";
const category2 = "Large aquarium";
const category3 = "Plankton Diet";
const price = "149,99 €";
const imageSrc =
  "https://unsplash.com/photos/3VOTHTrE614/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU5NTM3NTA2&force=true&w=640";

// where I want to diinally add
const container = document.body;
//1. create article
const newProduct = document.createElement("article");
newProduct.className = "product";
//2. create section
const newProductBody = document.createElement("section");
newProductBody.className = "product__body";
//3. create div1
const newProductTextContainer = document.createElement("div");
newProductTextContainer.className = "product__text-container";
//4. create h2
const newProductName = document.createElement("h2");
newProductName.className = "product__name";
newProductName.textContent = name;
//5. create ul
const newProductCategories = document.createElement("ul");
newProductCategories.className = "product__categories";
//6. create li
const newProductCategory1 = document.createElement("li");
newProductCategory1.className = "product__category";
newProductCategory1.textContent = category1;

const newProductCategory2 = document.createElement("li");
newProductCategory2.className = "product__category";
newProductCategory2.textContent = category2;

const newProductCategory3 = document.createElement("li");
newProductCategory3.className = "product__category";
newProductCategory3.textContent = category3;
//7. create p
const newProductDescription = document.createElement("p");
newProductDescription.className = "product__description";
newProductDescription.textContent = description;
//8. create div2
const newProductImageContainer = document.createElement("div");
newProductImageContainer.className = "product__image-container";
//9. create img
const newProductImage = document.createElement("img");
newProductImage.className = "product__image";
newProductImage.src = imageSrc;
newProductImage.alt = "";
//10. create footer
const newProductFooter = document.createElement("footer");
newProductFooter.className = "product__footer";
//11. create span
const newProductPrice = document.createElement("span");
newProductPrice.className = "product__price";
newProductPrice.textContent = price;
//12. Create button
const newProductBuyButton = document.createElement("button");
newProductBuyButton.className = "product__buy-button";
newProductBuyButton.type = "button";
newProductBuyButton.textContent = "Buy";
//13. append to div1
newProductCategories.append(
  newProductCategory1,
  newProductCategory2,
  newProductCategory3
);
newProductTextContainer.append(
  newProductName,
  newProductCategories,
  newProductDescription
);
//14. append to div2
newProductImageContainer.append(newProductImage);
//15. append to section (div1 and div2)
newProductBody.append(newProductTextContainer, newProductImageContainer);
//16. append to footer
newProductFooter.append(newProductPrice, newProductBuyButton);
//17. append to article
newProduct.append(newProductBody, newProductFooter);
//18. append to container
container.append(newProduct);
//19. Add Buy event
newProductBuyButton.addEventListener("click", (event) => {
  const nameAndPrice = name + ": " + price;
  console.log(nameAndPrice);
});

/* This is the Html code 
<body>
    <h1>Products</h1>
    <article class="product">
      <section class="product__body">
        <div class="product__text-container">
          <h2 class="product__name">Anemonefish</h2>
          <ul class="product__categories">
            <li class="product__category">Sea water</li>
            <li class="product__category">Warmer waters</li>
            <li class="product__category">Omnivorous</li>
          </ul>
          <p class="product__description">
            Anemonefish are omnivorous and can feed on undigested food from
            their host anemones. When a sea anemone is not available in an
            aquarium, the anemonefish may settle in some varieties of soft
            corals, or large polyp stony corals.
          </p>
        </div>
        <div class="product__image-container">
          <img
            class="product__image"
            src="https://unsplash.com/photos/rEM3cK8F1pk/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8bmVtb3xlbnwwfHx8fDE2NTk1MjE1MzA&force=true&w=640"
            alt=""
          />
        </div>
      </section>
      <footer class="product__footer">
        <span class="product__price">15,99 €</span>
        <button type="button" class="product__buy-button">Buy</button>
      </footer>
    </article>
  </body>
*/
/*
const body = document.body;

//create article
const product = document.createElement("article");
product.className = "product";

product.innerHTML = `
  <section class="product__body">
    <div class="product__text-container">
      <h2 class="product__name">${name}</h2>
      <ul class="product__categories">
        <li class="product__category">${category1}</li>
        <li class="product__category">${category2}</li>
        <li class="product__category">${category3}</li>
      </ul>
      <p class="product__description">
       ${description}
      </p>
    </div>
    <div class="product__image-container">
      <img
        class="product__image"
        src=${imageSrc}
        alt=""
      />
    </div>
  </section>
  <footer class="product__footer">
    <span class="product__price">${price}</span>
    <button type="button" class="product__buy-button">Buy</button>
  </footer> 
`;

body.append(product);
*/
