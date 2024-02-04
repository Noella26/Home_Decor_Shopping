$(document).ready(function () {
    let shoppingCart = JSON.parse(localStorage.getItem('shoppingCart')) || [];

    $('.add-to-cart').on('click', function () {
        const product = $(this).closest('.box');
        const productId = product.data('id');
        const productName = product.data('name');
        const productPrice = parseFloat(product.data('price'));

        // Add the product to the shopping cart array
        shoppingCart.push({
            id: productId,
            name: productName,
            price: productPrice
        });

        // Store the updated cart in local storage
        localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));

        alert(`Added ${productName} to the cart!`);
    });

    $('#view-cart').on('click', function () {
        // Redirect to the cart page
        window.location.href = 'cart.html';
    });
});
