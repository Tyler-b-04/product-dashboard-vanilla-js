const url = "https://www.course-api.com/javascript-store-products";

// Fetch
function fetchProductsThen() {
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (products) {
      products.forEach(function (product) {
        console.log(product.fields.name);
      });
    })
    .catch(function (error) {
      console.log("Fetch error:", error.message);
    });
}

// Product display 
function displayProducts(products) {
  const productContainer = document.getElementById("product-container");
  productContainer.innerHTML = "";

  const firstFiveProducts = products.slice(0, 5);

  firstFiveProducts.forEach(function (product) {
    const name = product.fields.name;
    const price = product.fields.price / 100;
    const image = product.fields.image[0].url;

    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <img src="${image}" alt="${name}">
      <h3>${name}</h3>
      <p>$${price.toFixed(2)}</p>
    `;

    productContainer.appendChild(card);
  });
}
// Async + await functions + error message
function handleError(error) {
  console.log(`An error has occurred: ${error.message}`);
}
async function fetchProductsAsync() {
  try {
    const response = await fetch(url);
    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    handleError(error);
  }
}

fetchProductsThen();
fetchProductsAsync();