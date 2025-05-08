import { cart, addToCart } from '../data/cart.js';
import { products, loadProducts } from '../data/products.js';
import { formatCurrency } from './utils/money.js';

const token = localStorage.getItem('token');

// --- Load Cart from Server ---
async function loadCartFromServer() {
  if (!token) return;
  try {
    const res = await fetch('http://localhost:3000/api/cart', {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    });
    const serverCart = await res.json();

    // Replace local cart contents
    cart.length = 0;
    serverCart.forEach(item => cart.push(item));

    updateCartQuantity(); // Re-render cart quantity
  } catch (err) {
    console.error('Error loading cart from server:', err);
  }
}

// --- Save Cart to Server ---
async function saveCartToServer() {
  if (!token) return;
  try {
    await fetch('http://localhost:3000/api/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify({ cart })
    });
  } catch (err) {
    console.error('Error saving cart to server:', err);
  }
}

// --- Render Products ---
loadProducts(renderProductsGrid);

function renderProductsGrid() {
  let productsHTML = '';

  products.forEach((product) => {
    productsHTML += `
      <div class="product-container">
        <div class="product-image-container">
          <img class="product-image"
            src="${product.image}">
        </div>

        <div class="product-name limit-text-to-2-lines">
          ${product.name}
        </div>

        <div class="product-rating-container">
          <img class="product-rating-stars"
            src="${product.getStarsUrl()}">
          <div class="product-rating-count link-primary">
            ${product.rating.count}
          </div>
        </div>

        <div class="product-price">
          ${product.getPrice()}
        </div>

        <div class="product-quantity-container">
          <select>
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        
        ${product.extraInfoHTML()}

        <div class="product-spacer"></div>

        <div class="added-to-cart">
          <img src="images/icons/checkmark.png">
          Added
        </div>

        <button class="add-to-cart-button button-primary js-add-to-cart"
          data-product-id="${product.id}">
          Add to Cart
        </button>
      </div>
    `;
  });

  document.querySelector('.js-products-grid').innerHTML = productsHTML;

  document.querySelectorAll('.js-add-to-cart')
    .forEach((button) => {
      button.addEventListener('click', async () => {
        const productId = button.dataset.productId;
        addToCart(productId);
        updateCartQuantity();
        await saveCartToServer(); // save after cart changes
      });
    });

  updateCartQuantity(); // update on initial render
}

// --- Cart Quantity Badge ---
function updateCartQuantity() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  document.querySelector('.js-cart-quantity')
    .innerHTML = cartQuantity;
}

// --- Load user's cart on page load ---
window.addEventListener('DOMContentLoaded', () => {
  loadCartFromServer();
});
