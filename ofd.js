let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

function addToCart(item, price) {
  cart.push({ item, price });
  sessionStorage.setItem("cart", JSON.stringify(cart));
  alert(item + " added to cart!");
}

function displayCart() {
  let cartItems = document.getElementById("cartItems");
  let totalPrice = 0;
  cartItems.innerHTML = "";

  cart.forEach((product) => {
    let li = document.createElement("li");
    li.textContent = `${product.item} - $${product.price}`;
    cartItems.appendChild(li);
    totalPrice += product.price;
  });

  document.getElementById("totalPrice").textContent = totalPrice;
}

if (window.location.pathname.includes("cart.html")) {
  displayCart();
}


function clearCart() {
  sessionStorage.removeItem("cart");
  cart = [];
  displayCart();
  alert("Cart cleared!");
}


function validateForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill out all fields.");
    return false;
  }

  alert("Thank you, " + name + "! Your message has been sent.");
  return true;
}

// Show Category Tabs
function showCategory(category) {
  const categories = document.querySelectorAll(".category");
  const tabs = document.querySelectorAll(".tab-btn");

  categories.forEach(cat => cat.classList.remove("active"));
  tabs.forEach(tab => tab.classList.remove("active"));

  document.querySelector("." + category).classList.add("active");
  event.target.classList.add("active");
}

//Order Now Button
document.getElementById("order-btn").addEventListener("click", function() {
  window.location.href = "menu.html";
  });
