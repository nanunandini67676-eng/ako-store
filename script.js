
function addToCart(product) {
  let qty = prompt("How many " + product + " do you need? (1–10)");

  if (qty === null) return; // cancel pressed

  qty = parseInt(qty);

  if (isNaN(qty) || qty < 1 || qty > 10) {
    alert("Please enter a number between 1 and 10");
    return;
  }

  let cart = JSON.parse(localStorage.getItem("cart")) || {};

  if (cart[product]) {
    if (cart[product] + qty > 10) {
      alert("Maximum limit for " + product + " is 10");
      return;
    }
    cart[product] += qty;
  } else {
    cart[product] = qty;
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(qty + " " + product + " added to cart");
}

function loadCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || {};
  let cartList = document.getElementById("cartItems");

  if (!cartList) return;

  cartList.innerHTML = "";

  let products = Object.keys(cart);

  if (products.length === 0) {
    cartList.innerHTML = "<li>Your cart is empty</li>";
    return;
  }

  products.forEach(product => {
    let li = document.createElement("li");
    li.textContent = cart[product] + " " + product;
    cartList.appendChild(li);
  });
}

function clearCart() {
  localStorage.removeItem("cart");
  loadCart();
}

loadCart();