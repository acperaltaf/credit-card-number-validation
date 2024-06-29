document.getElementById('validate-button').addEventListener('click', function() {
    let cardNumber = document.getElementById('input').value;
    validateCreditCardNumber(cardNumber.toString());
});

document.getElementById('close-notification').addEventListener('click', function() {
    document.getElementById('notification').classList.add('hidden');
});

function validateCreditCardNumber(input) {
    let creditCardInt = input.split('').map(Number);

    for (let i = creditCardInt.length - 2; i >= 0; i -= 2) {
        let tempValue = creditCardInt[i];
        tempValue = tempValue * 2;
        
        if (tempValue > 9) {
            tempValue = tempValue % 10 + 1;
        }
        creditCardInt[i] = tempValue;
    }

    let total = 0;
    for (let i = 0; i < creditCardInt.length; i++) {
        total += creditCardInt[i];
    }

    let message = total % 10 === 0 ? 'Valid number' : 'Invalid number';
    showNotification(message);
}

function showNotification(message) {
    let notification = document.getElementById('notification');
    document.getElementById('notification-message').textContent = message;
    notification.classList.remove('hidden');
}






