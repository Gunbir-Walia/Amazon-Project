import { cart } from '../data/cart-class.js';
import { products, loadProducts } from '../data/products.js';
import { formatCurrency } from './utils/money.js';  

loadProducts(renderProductsGrid);

function renderProductsGrid() {

    document.querySelector('.js-loading-spinner').classList.add('loading-spinner-hidden');
    let productsHTML = '';

    const url = new URL(window.location.href);
    const search = url.searchParams.get('search');

    let filteredProducts = products;

    if (search) {
        const searchTerm = search.toLowerCase();

        filteredProducts = products.filter((product) => {
            // Check Name (Case-insensitive)
            let matchingName = product.name.toLowerCase().includes(searchTerm);

            // Check Keywords (Case-insensitive)
            let matchingKeyword = false;
            if (product.keywords) {
                matchingKeyword = product.keywords.some((keyword) => {
                    return keyword.toLowerCase().includes(searchTerm);
                });
            }
            // Return true if either matches
            return matchingName || matchingKeyword;
        });
    }

    if (filteredProducts.length === 0) {
        document.querySelector('.js-products-grid').innerHTML = `
            <div class="empty-results-message">
                No products matched your search.
            </div>
            <a class="link-primary view-all-link" href="amazon.html">
                View all products
            </a>
        `;
        return;
    }

    filteredProducts.forEach((product) => {
        productsHTML += `
        <div class="product-container">
            <div class="product-image-container">
                <img class="product-image" src="${product.image}">
            </div>

            <div class="product-name limit-text-to-2-lines">
                ${product.name}
            </div>

            <div class="product-rating-container">
                <img class="product-rating-stars" src="${product.getStarsUrl()}">
                <div class="product-rating-count link-primary">
                    ${product.rating.count}
                </div>
            </div>

            <div class="product-price">
                ${product.getPrice()}
            </div>

            <div class="product-quantity-container">
                <select class="js-quantity-selector-${product.id}">
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

            <div class="added-to-cart js-added-to-cart-${product.id}">
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

    function updateCartQuantity() {
        const cartQuantity = cart.calculateCartQuantity();

        if (cartQuantity === 0) {
            document.querySelector('.js-cart-quantity').innerHTML = '';
        } 
        else {
            document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
        }
    }

    updateCartQuantity();

    document.querySelectorAll('.js-add-to-cart').forEach((button) => {

        let addedMessageTimeoutId;

        button.addEventListener('click', () => {
            const { productId } = button.dataset;

            const quantitySelector = document.querySelector(
                `.js-quantity-selector-${productId}`
            );
            const quantity = Number(quantitySelector.value);

            cart.addToCart(productId, quantity);

            updateCartQuantity();

            const addedMessage = document.querySelector(`.js-added-to-cart-${productId}`);

            addedMessage.classList.add('added-to-cart-visible');

            if (addedMessageTimeoutId) {
                clearTimeout(addedMessageTimeoutId);
            }

            const timeoutId = setTimeout(() => {
                addedMessage.classList.remove('added-to-cart-visible');
            }, 2000);

            addedMessageTimeoutId = timeoutId;
        });
    })

    document.querySelector('.js-search-button').addEventListener('click', () => {
        const searchInput = document.querySelector('.js-search-bar').value;
        window.location.href = `amazon.html?search=${searchInput}`;
      });

    document.querySelector('.js-search-bar').addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const searchInput = document.querySelector('.js-search-bar').value;
            window.location.href = `amazon.html?search=${searchInput}`;
        }
      });
}