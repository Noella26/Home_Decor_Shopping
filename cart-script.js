$(document).ready(function () {
    const cartItemsContainer = $('#cart-items');

    // Retrieve stored cart items from localStorage
    const storedCart = JSON.parse(localStorage.getItem('shoppingCart')) || [];

    // Display each item in the cart
    storedCart.forEach(item => {
        cartItemsContainer.append(`<p>${item.name} - Rs. ${item.price}</p>`);
    });
});