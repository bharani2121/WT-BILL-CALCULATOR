const vegetableItems = {
    "Tomato": 30,
    "Potato": 20,
    "Onion": 25,
    "Carrot": 35,
    "Spinach": 15
};

function createItemButtons() {
    const itemsDiv = document.getElementById("items");
    for (let item in vegetableItems) {
        const container = document.createElement("div");
        container.classList.add("itemContainer");

        container.innerHTML = `
            <span>${item}</span>
            <input type="number" min="0" value="0" class="quantityInput">
            <span>₹${vegetableItems[item].toFixed(2)}</span>
        `;

        itemsDiv.appendChild(container);
    }
}

function calculateTotal() {
    const totalAmountSpan = document.getElementById("totalAmount");
    let total = 0;

    document.querySelectorAll(".quantityInput").forEach(input => {
        const item = input.parentElement.firstElementChild.textContent;
        const quantity = parseInt(input.value) || 0; // Default to 0 if input is not a number
        if (quantity >= 0) { // Validate quantity to be non-negative
            total += quantity * vegetableItems[item];
        }
    });

    totalAmountSpan.textContent = `₹${total.toFixed(2)}`;
}

function generateBill() {
    let bill = "Vegetable Shop Bill:\n";
    let total = 0;

    document.querySelectorAll(".quantityInput").forEach(input => {
        const item = input.parentElement.firstElementChild.textContent;
        const quantity = parseInt(input.value) || 0; // Default to 0 if input is not a number
        if (quantity > 0) { // Only include items with positive quantity in the bill
            const itemPrice = vegetableItems[item];
            const subtotal = quantity * itemPrice;
            bill += `${item}: ${quantity} x ₹${itemPrice.toFixed(2)} = ₹${subtotal.toFixed(2)}\n`;
            total += subtotal;
        }
    });

    bill += `Total: ₹${total.toFixed(2)}`;
    alert(bill);
}

window.onload = createItemButtons;
