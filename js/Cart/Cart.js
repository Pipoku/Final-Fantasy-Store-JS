// Retrieve cart items from localStorage
const cart = JSON.parse(localStorage.getItem('cart')).items || [];

// Get the cartItems container element
const cartItemsContainer = document.getElementById('cartItems');

// Clear the existing content of the container
cartItemsContainer.innerHTML = '';

// Function to display cart items
function displayCartItems() {
  // Clear the existing content of the container
  cartItemsContainer.innerHTML = '';

  // Display cart items
  if (cart.length === 0) {
    cartItemsContainer.textContent = 'No items in the cart.';
  } else {
    cart.forEach(item => {
      const itemCard = document.createElement('div');
      itemCard.classList.add('item-card');

      const itemName = document.createElement('h3');
      itemName.textContent = item.item.name;

      const itemPrice = document.createElement('p');
      itemPrice.textContent = `Price: $${item.item.price}`;

      const itemQuantity = document.createElement('p');
      itemQuantity.textContent = `Quantity: ${item.quantity}`;

      itemCard.appendChild(itemName);
      itemCard.appendChild(itemPrice);
      itemCard.appendChild(itemQuantity);

      cartItemsContainer.appendChild(itemCard);
    });
  }
}

// Display initial cart items
displayCartItems();

// Get the reset button element
const resetButton = document.getElementById('resetButton');

// Reset button click event handler
resetButton.addEventListener('click', function() {
  // Reset all item quantities to 0
  cart.forEach(item => {
    item.quantity = 0;
  });

  // Update localStorage with the updated cart items
  localStorage.setItem('cart', JSON.stringify({ items: cart }));

  // Reload the page to display the updated cart items
  location.reload();
});
