document.getElementById('loan-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const price = parseFloat(document.getElementById('price').value);
    const down = parseFloat(document.getElementById('down').value);
    const interest = parseFloat(document.getElementById('interest').value) / 100 / 12;
    const term = parseInt(document.getElementById('term').value);

    const loanAmount = price - down;
    const monthlyPayment = (loanAmount * interest) / (1 - Math.pow(1 + interest, -term));
    const totalPaid = monthlyPayment * term;
    const totalInterest = totalPaid - loanAmount;

    document.getElementById('monthly').textContent = monthlyPayment.toFixed(2);
    document.getElementById('interest-paid').textContent = totalInterest.toFixed(2);
    document.getElementById('total').textContent = totalPaid.toFixed(2);

    document.getElementById('results').classList.remove('hidden');
});

// Theme toggle
const themeToggleBtn = document.getElementById('toggle-theme');
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    themeToggleBtn.textContent = document.body.classList.contains('dark') ? '🌙' : '🌞';
});
  