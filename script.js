let cartQuantity = 0;
const MAX_QUANTITY = 10;

function updateDisplay() {
    const display = document.getElementById('quantityDisplay');
    display.textContent = `Cart Quantity: ${cartQuantity}`;
    display.classList.add('updated');
    setTimeout(() => display.classList.remove('updated'), 500);
}

function updateButtons() {
    const buttons = [document.getElementById('addOneBtn'), 
                   document.getElementById('addTwoBtn'), 
                   document.getElementById('addThreeBtn')];
    
    buttons.forEach(button => {
        button.disabled = cartQuantity >= MAX_QUANTITY;
    });
}

function showError() {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.style.display = 'block';
    setTimeout(() => errorMessage.style.display = 'none', 2000);
}

function addToCart() {
    if (cartQuantity >= MAX_QUANTITY) {
        showError();
        return;
    }
    cartQuantity += 1;
    console.log(`Cart quantity: ${cartQuantity}`);
    updateDisplay();
    updateButtons();
}

function addTwo() {
    if (cartQuantity + 2 > MAX_QUANTITY) {
        showError();
        return;
    }
    cartQuantity += 2;
    console.log(`Cart quantity: ${cartQuantity}`);
    updateDisplay();
    updateButtons();
}

function addThree() {
    if (cartQuantity + 3 > MAX_QUANTITY) {
        showError();
        return;
    }
    cartQuantity += 3;
    console.log(`Cart quantity: ${cartQuantity}`);
    updateDisplay();
    updateButtons();
}

function resetCart() {
    cartQuantity = 0;
    console.log('Cart was reset');
    console.log(`Cart quantity: ${cartQuantity}`);
    updateDisplay();
    updateButtons();
}

function checkout() {
    if (cartQuantity === 0) {
        alert('Your cart is empty!');
        return;
    }
    alert(`Thank you for your purchase! Total items: ${cartQuantity}`);
    resetCart();
}

// Initialize display and buttons
updateDisplay();
updateButtons();