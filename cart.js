// Function to display cart items on the cart page
function displayCartItems() {
    const cartList = document.getElementById('cart-list');
    const totalPriceElement = document.getElementById('total-price');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalPrice = 0;

    // Clear the cart list before displaying
    cartList.innerHTML = '';

    // Loop through cart and display each item
    cart.forEach(item => {
        const productElement = document.createElement('div');
        productElement.classList.add('cart-item');
        productElement.innerHTML = `
            <h3>${item.name}</h3>
            <p>Price: $${item.price}</p>
            <p>Quantity: ${item.quantity}</p>
        `;

        cartList.appendChild(productElement);
        totalPrice += item.price * item.quantity;
    });

    // Update total price
    totalPriceElement.innerText = totalPrice.toFixed(2);
}

// Call this function when the cart page loads
document.addEventListener('DOMContentLoaded', displayCartItems);

// Clear cart button functionality
const clearCartButton = document.getElementById('clear-cart');
clearCartButton.addEventListener('click', () => {
    localStorage.removeItem('cart');
    alert('Cart has been cleared!');
    displayCartItems(); // Refresh the cart UI
});

// Proceed to Order button functionality
const proceedButton = document.getElementById('Order');
proceedButton.addEventListener('click', () => {
    // Hide cart items and buttons
    document.querySelector('.cart-items').innerHTML = '';
    
    // Display a thank you message
    const thankYouMessage = document.createElement('div');
    thankYouMessage.classList.add('thank-you-message');
    thankYouMessage.innerHTML = `<h2>Thank you for shopping with us!</h2>`;
    
    document.body.appendChild(thankYouMessage);

    // Optionally, clear the cart
    localStorage.removeItem('cart');
});
