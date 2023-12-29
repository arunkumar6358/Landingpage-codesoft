const menu = document.querySelector('.menubar a');
const menulist = document.querySelector('nav ul');
const orderForm = document.getElementById('orderForm');
const dishSelect = document.getElementById('dish');
const quantityInput = document.getElementById('quantity');
const totalPriceElement = document.getElementById('totalPrice');

menu.addEventListener('click', () => {
    menulist.classList.toggle('showmenu');
    // Check the current content and toggle between ☰ and ✓
    menu.innerHTML = menulist.classList.contains('showmenu') ? '&#x2613;' : '☰';
});

orderForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting for now

    // Retrieve values from the form
    const selectedDish = dishSelect.value;
    const quantity = parseInt(quantityInput.value);

    // Calculate total price based on your logic
    const totalPrice = calculateTotalPrice(selectedDish, quantity);

    // Update the total price element
    totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
});

// Function to calculate the total price (you can modify this based on your pricing logic)
function calculateTotalPrice(dish, quantity) {
    // Placeholder logic, replace with your actual pricing logic
    const dishPrices = {
        special_pasta: 10.99,
        shrimp_skewers: 15.99,
        quinoa_bowl: 12.99,
        // Add more dishes as needed
    };

    const price = dishPrices[dish] || 0; // Get the price of the selected dish or default to 0
    return price * quantity;
}
