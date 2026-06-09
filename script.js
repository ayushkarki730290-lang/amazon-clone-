function addToCart(product, price) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        product: product,
        price: price
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(product + " added to cart");
}

function displayCart() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let cartItems = document.getElementById("cart-items");

    let total = 0;

    cart.forEach(item => {

        total += item.price;

        cartItems.innerHTML += `
            <div>
                <h3>${item.product}</h3>
                <p>₹${item.price}</p>
            </div>
        `;
    });

    document.getElementById("total").innerText =
        "Total: ₹" + total;
}
