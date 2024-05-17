let cart = [];

function addToCart(productId) {
    // Add product to cart
    const product = getProductById(productId);
    const existingProduct = cart.find(item => item.id === productId);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCart();
}

function removeFromCart(productId) {
    // Remove product from cart
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

function updateCart() {
    const cartTableBody = document.querySelector('#cart-table tbody');
    cartTableBody.innerHTML = '';

    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>${item.quantity}</td>
            <td>$${itemTotal.toFixed(2)}</td>
            <td><button onclick="removeFromCart(${item.id})">Remove</button></td>
        `;
        cartTableBody.appendChild(row);
    });

    document.getElementById('cart-total').textContent = `$${total.toFixed(2)}`;
}

function getProductById(id) {
    const products = [
        { id: 1, name: 'Product 1', price: 19.99 },
        { id: 2, name: 'Product 2', price: 29.99 },
        { id: 3, name: 'Product 3', price: 39.99 },
    ];

    return products.find(product => product.id === id);
}

document.addEventListener('DOMContentLoaded', () => {
    const productPage = window.location.pathname.includes('product.html');
    const cartPage = window.location.pathname.includes('cart.html');

    if (productPage) {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = parseInt(urlParams.get('id'), 10);
        const product = getProductById(productId);

        if (product) {
            document.getElementById('product-img').src = `assets/product${product.id}.jpg`;
            document.getElementById('product-title').textContent = product.name;
            document.getElementById('product-price').textContent = `$${product.price.toFixed(2)}`;
            document.getElementById('product-description').textContent = `This is a great product: ${product.name}.`;
        }
    }

    if (cartPage) {
        updateCart();
    }
});
