// Initialize an array to store the ordered items
let orderItems = [];

// Function to add an item to the order list
function addItem(itemName, price) {
    // Add the item to the order array
    orderItems.push({ name: itemName, price: price });

    // Update the order list display
    updateOrderList();

    // Update total amount display in the payment section
    updateTotalAmount();

    // Show notification
    showNotification();
}

// Function to remove an item from the order list
function removeItem(index) {
   
    orderItems.splice(index, 1);


    updateOrderList();


    updateTotalAmount();
}

// Function to update the order list display
function updateOrderList() {
    const orderList = document.getElementById("order-list");
    orderList.innerHTML = "";
    orderItems.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - Price: Php ${item.price.toFixed(2)}`;
        const removeButton = document.createElement("button");
        removeButton.textContent = "-";
        removeButton.addEventListener("click", () => removeItem(index));
        listItem.appendChild(removeButton);
        orderList.appendChild(listItem);
    });
}


function updateTotalAmount() {
    const totalAmount = orderItems.reduce((acc, item) => acc + item.price, 0).toFixed(2);
    document.getElementById("total-amount").textContent = `Php ${totalAmount}`;
}

// Function to process payment
function processPayment() {
    const paymentAmount = parseFloat(document.getElementById("payment-amount").value);
    const total = orderItems.reduce((acc, item) => acc + item.price, 0);

    if (paymentAmount >= total) {
        const change = paymentAmount - total;
        // Display receipt with total, change, and thank you message as an unordered list
        document.getElementById("receipt-total").innerHTML = `<ul><li>Total: Php ${total.toFixed(2)}</li><li>Change: Php ${change.toFixed(2)}</li><li>Thank you for your purchase!</li></ul>`;
        // Clear the order list and payment amount input after successful payment
        orderItems = [];
        updateOrderList();
        document.getElementById("payment-amount").value = "";
        // Update total amount display in the payment section
        updateTotalAmount();
    } else {
        document.getElementById("receipt-total").textContent = "Insufficient payment amount!";
    }
}
function cancelOrder() {
    // Clear the order items array
    orderItems = [];

    // Update the order list display
    updateOrderList();

    // Clear the payment amount input
    document.getElementById("payment-amount").value = "";

    // Hide the notification if it's shown
    closeNotification();
}

function cancelOrder() {
    // Clear the order list and payment amount input
    orderItems = [];
    updateOrderList();
    document.getElementById("payment-amount").value = "";

    // Hide the notification if it's shown
    closeNotification();
}

// Function to show the notification
function showNotification() {
    const notification = document.getElementById("notification");
    notification.classList.add('active');
}

// Function to close the notification
function closeNotification() {
    const notification = document.getElementById("notification");
    notification.classList.remove('active');
}
