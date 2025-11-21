let cartCount = 0;

function addToCart(productName) {
  cartCount++;
  alert(`${productName} added to cart!`);
  document.querySelector(".cart-btn").textContent = `🛒 Cart (${cartCount})`;
}

function showCart() {
  alert(`You have ${cartCount} item(s) in your cart.`);
}

// Toggle login modal
function toggleLoginModal() {
  const modal = document.getElementById("loginModal");
  modal.style.display = modal.style.display === "block" ? "none" : "block";
}

// Filter products
function filterProducts() {
  const search = document.getElementById("searchInput").value.toLowerCase();
  const category = document.getElementById("categoryFilter").value;
  const products = document.querySelectorAll(".product");

  products.forEach(product => {
    const name = product.getAttribute("data-name").toLowerCase();
    const prodCat = product.getAttribute("data-category");

    const matchSearch = name.includes(search);
    const matchCategory = category === "all" || prodCat === category;

    product.style.display = matchSearch && matchCategory ? "block" : "none";
  });
}

// Close modal on outside click
window.onclick = function(event) {
  const modal = document.getElementById("loginModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
