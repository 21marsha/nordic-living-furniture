let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ADD TO CART
function addToCart(name, price, image) {

  cart.push({
    name: name,
    price: price,
    image: image
  });

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Added to cart!");
}

// RENDER CART
function renderCart() {

  let container = document.getElementById("cart-items");

  if (!container) return;

  container.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {

    total += item.price;

    container.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}">
        <div>
          <h3>${item.name}</h3>
          <p>$${item.price}</p>
        </div>

        <div class="item-price">
          $${item.price}
        </div>
      </div>
    `;
  });

  document.getElementById("total").innerText = "Total: $" + total;
}