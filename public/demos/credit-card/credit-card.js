const form = document.getElementById('cardForm');
const cardNumberInput = document.getElementById('cardnumber');
const expiryInput = document.getElementById('expdate');
const message = document.getElementById('formMessage');

// Format card number as XXXX XXXX XXXX XXXX
cardNumberInput.addEventListener('input', () => {
    let value = cardNumberInput.value.replace(/\D/g, '').slice(0, 16);
    cardNumberInput.value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
});

// Format expiry date as MM/YY
expiryInput.addEventListener('input', () => {
    let value = expiryInput.value.replace(/\D/g, '').slice(0, 4);
    if (value.length > 2) {
        expiryInput.value = value.slice(0, 2) + '/' + value.slice(2);
    } else {
        expiryInput.value = value;
    }
});

form.onsubmit = (e) => {
    e.preventDefault();
    const cardholder = document.getElementById('cardholder').value.trim();
    const cardnumber = cardNumberInput.value.replace(/\s/g, '');
    const expdate = expiryInput.value;
    const cvv = document.getElementById('cvv').value.trim();

    if (cardholder && cardnumber.length === 16 && /^\d{2}\/\d{2}$/.test(expdate) && /^\d{3,4}$/.test(cvv)) {
        
        message.textContent = 'Payment processed successfully!';
        form.reset();
    } else {
        message.style.color = 'red';
        message.textContent = 'Please fill in all fields correctly.';
    }
};
