let balance = 100.0;

function updateBalance() {
    document.getElementById('balance').innerText = `Saldo: $${balance.toFixed(2)}`;
}

function deposit() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (!isNaN(amount) && amount > 0) {
        balance += amount;
        updateBalance();
        document.getElementById('result').innerText = `Gestort $${amount.toFixed(2)}`;
    } else {
        document.getElementById('result').innerText = 'Ongeldig bedrag';
    }
}

function withdraw() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (!isNaN(amount) && amount > 0 && amount <= balance) {
        balance -= amount;
        updateBalance();
        document.getElementById('result').innerText = `Opgenomen $${amount.toFixed(2)}`;
    } else {
        document.getElementById('result').innerText = 'Ongeldig bedrag of ontoereikend saldo';
    }
}

updateBalance();
